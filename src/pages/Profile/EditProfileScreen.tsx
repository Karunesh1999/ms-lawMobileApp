import { useState, useRef, type ChangeEvent } from 'react';
import { ChevronLeft, Camera, CircleCheck, Save, Trash2, Lock } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';

export interface UserProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
  emergencyContact: string;
  avatarUrl?: string;
}

interface EditProfileScreenProps {
  profile: UserProfileData;
  onSave: (updated: UserProfileData) => void;
  onBack: () => void;
}

export function EditProfileScreen({ profile, onSave, onBack }: EditProfileScreenProps) {
  const [formData, setFormData] = useState<UserProfileData>({ ...profile });
  const [isSaved, setIsSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'AM';
  };

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size exceeds 5 MB. Please choose a smaller image.');
      return;
    }

    // Validate image format
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (JPG, PNG, or WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setFormData((prev) => ({ ...prev, avatarUrl: result }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setFormData((prev) => ({ ...prev, avatarUrl: undefined }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setIsSaved(true);
    setTimeout(() => {
      onBack();
    }, 500);
  };

  return (
    <>
      <button type="button" className="back-link" onClick={onBack}>
        <ChevronLeft size={16} /> Back to profile
      </button>

      <SectionHeader
        title="Edit profile"
        subtitle="Update your personal details and profile picture."
      />

      {isSaved && (
        <div className="flex items-center gap-2 p-3 mb-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium animate-in fade-in-0 duration-200">
          <CircleCheck size={16} className="text-emerald-600 shrink-0" />
          <span>Profile updated successfully! Returning to profile...</span>
        </div>
      )}

      {/* Hidden File Input for Image Upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg,image/webp"
        style={{ display: 'none' }}
        onChange={handlePhotoUpload}
      />

      {/* Avatar Card with Photo Upload */}
      <div className="edit-avatar-section">
        <div
          className="edit-avatar-circle group relative cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
          title="Click to upload new photo"
        >
          {formData.avatarUrl ? (
            <img
              src={formData.avatarUrl}
              alt={formData.name}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            getInitials(formData.name)
          )}
          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity rounded-full flex items-center justify-center text-white">
            <Camera size={18} />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-[14px] font-bold text-[#132d4d] m-0">{formData.name}</h3>
          <p className="text-[11px] text-[#8291a0] mt-0.5 mb-2.5">Client ID · MS-2026-001</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="change-photo-btn"
              onClick={() => fileInputRef.current?.click()}
            >
              <Camera size={13} /> {formData.avatarUrl ? 'Change photo' : 'Upload photo'}
            </button>
            {formData.avatarUrl && (
              <button
                type="button"
                className="text-[11px] text-[#d93838] hover:text-[#b82626] font-semibold flex items-center gap-1 px-2 py-1 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-200/60"
                onClick={handleRemovePhoto}
              >
                <Trash2 size={12} /> Remove
              </button>
            )}
          </div>
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
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="edit-email" className="!mb-0">Email address</label>
            <span className="text-[10px] text-[#8a9bab] font-medium flex items-center gap-1">
              <Lock size={11} /> Cannot be changed
            </span>
          </div>
          <input
            id="edit-email"
            type="email"
            readOnly
            disabled
            value={formData.email}
            className="!bg-[#f4f7fa] !text-[#718292] !cursor-not-allowed !border-[#e2e8f0] select-none"
            title="Email address is linked to your client account and cannot be modified."
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
