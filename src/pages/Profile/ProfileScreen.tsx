import { useState } from 'react';
import { UserRound, FileText, MessageCircle, Ellipsis, ChevronRight, Phone } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { EditProfileScreen, type UserProfileData } from './EditProfileScreen';
import type { TabType } from '../../types/portal';

interface ProfileScreenProps {
  onTab: (tab: TabType) => void;
  onLogout: () => void;
}

export function ProfileScreen({ onLogout }: ProfileScreenProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfileData>({
    name: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '(213) 555-0148',
    address: '742 Evergreen Terrace, Los Angeles, CA 90012',
    emergencyContact: 'Taylor Morgan · (213) 555-0199',
  });

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'AM';
  };

  if (isEditing) {
    return (
      <EditProfileScreen
        profile={profile}
        onSave={(updated) => setProfile(updated)}
        onBack={() => setIsEditing(false)}
      />
    );
  }

  const menuOptions = [
    { title: 'Personal information', icon: UserRound, onClick: () => setIsEditing(true) },
    { title: 'My documents', icon: FileText },
    { title: 'Help & support', icon: MessageCircle },
    { title: 'General settings', icon: Ellipsis },
  ];

  return (
    <>
      <SectionHeader title="Profile" subtitle="Manage your account and preferences." />

      <div className="profile-card">
        <div className="profile-avatar">{getInitials(profile.name)}</div>
        <div>
          <h2>{profile.name}</h2>
          <p>Client ID · MS-2026-001</p>
        </div>
        <button
          type="button"
          className="edit-button"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </div>

      <div className="menu-list">
        {menuOptions.map(({ title, icon: Icon, onClick }) => (
          <button
            key={title}
            type="button"
            className="menu-row"
            onClick={onClick}
          >
            <span className="menu-icon">
              <Icon size={18} />
            </span>
            <span>{title}</span>
            <ChevronRight size={17} className="chevron" />
          </button>
        ))}
      </div>

      <div className="contact-banner">
        <Phone size={18} />
        <div>
          <strong>Need urgent assistance?</strong>
          <p>Call our office at (213) 555-0148</p>
        </div>
      </div>

      <button type="button" className="logout-button" onClick={onLogout}>
        Log out
      </button>

      <p className="version">MS LAW Client · Version 1.0.0</p>

      <div className="bottom-space" />
    </>
  );
}

export default ProfileScreen;
