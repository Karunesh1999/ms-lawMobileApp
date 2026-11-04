import { UserRound, FileText, MessageCircle, Ellipsis, ChevronRight, Phone } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';
import type { TabType } from '../../types/portal';

interface ProfileScreenProps {
  onTab: (tab: TabType) => void;
  onLogout: () => void;
}

export function ProfileScreen({ onLogout }: ProfileScreenProps) {
  const menuOptions = [
    { title: 'Personal information', icon: UserRound },
    { title: 'My documents', icon: FileText },
    { title: 'Help & support', icon: MessageCircle },
    { title: 'General settings', icon: Ellipsis },
  ];

  return (
    <>
      <SectionHeader title="Profile" subtitle="Manage your account and preferences." />

      <div className="profile-card">
        <div className="profile-avatar">AM</div>
        <div>
          <h2>Alex Morgan</h2>
          <p>Client ID · MS-2026-001</p>
        </div>
        <button className="edit-button">Edit</button>
      </div>

      <div className="menu-list">
        {menuOptions.map(({ title, icon: Icon }) => (
          <button key={title} className="menu-row">
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

      <button className="logout-button" onClick={onLogout}>
        Log out
      </button>

      <p className="version">MS LAW Client · Version 1.0.0</p>

      <div className="bottom-space" />
    </>
  );
}

export default ProfileScreen;
