import { useState } from 'react';
import { ChevronLeft, Camera, CircleCheck, Save } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';

export interface UserProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
  emergencyContact: string;
}

interface EditProfileScreenProps {
  profile: UserProfileData;
  onSave: (updated: UserProfileData) => void;
  onBack: () => void;
}

export function EditProfileScreen({ profile, onSave, onBack }: EditProfileScreenProps) {
  const [formData, setFormData] = useState<UserProfileData>({ ...profile });
  const [isSaved, setIsSaved] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'AM';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setIsSaved(true);
    setTimeout(() => {
      onBack();
    }, 600);
  };

  return (
    <>
      <button type="button" className="back-link" onClick={onBack}>
        <ChevronLeft size={16} /> Back to profile
      </button>

      <SectionHeader
        title="Edit profile"
        subtitle="Update your personal and contact details."
      />

      {isSaved && (
        <div className="flex items-center gap-2 p-3 mb-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium animate-in fade-in-0 duration-200">
          <CircleCheck size={16} className="text-emerald-600 shrink-0" />
          <span>Profile updated successfully! Returning to profile...</span>
        </div>
      )}

      {/* Avatar Card */}
      <div className="edit-avatar-section">
        <div className="edit-avatar-circle">
          {getInitials(formData.name)}
        </div>
        <div>
          <h3 className="text-[14px] font-bold text-[#132d4d] m-0">{formData.name}</h3>
          <p className="text-[11px] text-[#8291a0] mt-0.5 mb-2.5">Client ID · MS-2026-001</p>
          <button
            type="button"
            className="change-photo-btn"
            onClick={() => alert('Photo upload dialog would open here.')}
          >
            <Camera size={13} /> Change photo
          </button>
        </div>
      </div>

      {/* Edit Form */}
      <form onSubmit={handleSubmit}>
        <div className="edit-field-group">
          <label htmlFor="edit-name">Full name</label>
          <input
            id="edit-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your full name"
          />
        </div>

        <div className="edit-field-group">
          <label htmlFor="edit-email">Email address</label>
          <input
            id="edit-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your.email@example.com"
          />
        </div>

        <div className="edit-field-group">
          <label htmlFor="edit-phone">Phone number</label>
          <input
            id="edit-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(213) 555-0148"
          />
        </div>

        <div className="edit-field-group">
          <label htmlFor="edit-address">Mailing address</label>
          <input
            id="edit-address"
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder="Street address, City, State ZIP"
          />
        </div>

        <div className="edit-field-group">
          <label htmlFor="edit-emergency">Emergency contact</label>
          <input
            id="edit-emergency"
            type="text"
            value={formData.emergencyContact}
            onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
            placeholder="Name & phone number"
          />
        </div>

        {/* Action Buttons */}
        <div className="edit-profile-actions">
          <button type="submit" className="primary-button wide">
            <Save size={15} /> Save changes
          </button>
          <button
            type="button"
            className="secondary-button wide"
            onClick={onBack}
          >
            Cancel
          </button>
        </div>
      </form>

      <div className="bottom-space" />
    </>
  );
}

export default EditProfileScreen;

