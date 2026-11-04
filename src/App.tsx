import { useState, useEffect } from 'react';
import type { AppFlowState, TabType } from './types/portal';
import { Topbar } from './components/layout/Topbar';
import { BottomNav } from './components/layout/BottomNav';
import { ResponsiveDeviceWrapper } from './components/layout/ResponsiveDeviceWrapper';
import { NotificationsModal } from './components/modals/NotificationsModal';
import { BookConsultationModal } from './components/modals/BookConsultationModal';
import { UploadDocumentModal } from './components/modals/UploadDocumentModal';

import { SplashScreen } from './pages/Splash';
import { OnboardingScreen } from './pages/Onboarding';
import { AuthScreen } from './pages/Auth';
import { HomeScreen } from './pages/Home';
import { CasesScreen, CaseDetailsScreen } from './pages/Cases';
import { AppointmentsScreen } from './pages/Appointments';
import { MessagesScreen, DirectMessageScreen } from './pages/Messages';
import { ProfileScreen } from './pages/Profile';

export function App() {
  const [appFlow, setAppFlow] = useState<AppFlowState>('splash');
  const [currentTab, setCurrentTab] = useState<TabType>('Home');
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setAppFlow('onboarding'), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isDmOpen, setIsDmOpen] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleTab = (tab: TabType) => {
    setCurrentTab(tab);
    setIsNotificationsOpen(false);
  };

  const renderActiveScreen = () => {
    if (appFlow === 'splash') {
      return <SplashScreen />;
    }

    if (appFlow === 'onboarding') {
      return <OnboardingScreen onGetStarted={() => setAppFlow('auth')} />;
    }

    if (appFlow === 'auth') {
      return <AuthScreen onLogin={() => setAppFlow('app')} onBack={() => setAppFlow('onboarding')} />;
    }

    return (
      <div className="phone-frame">
        <Topbar
          onOpenNotifications={() => setIsNotificationsOpen(true)}
          onOpenProfile={() => handleTab('Profile')}
        />

        <div className="content-scroll">
          {currentTab === 'Home' && (
            <HomeScreen
              onConsult={() => setIsConsultModalOpen(true)}
              onUpload={() => setIsUploadModalOpen(true)}
              onTab={handleTab}
            />
          )}

          {currentTab === 'My Cases' && (
            <CasesScreen
              onTab={handleTab}
              onOpenCase={() => setCurrentTab('Case details')}
            />
          )}

          {currentTab === 'Case details' && (
            <CaseDetailsScreen
              onBack={() => setCurrentTab('My Cases')}
              onMessage={() => {
                setCurrentTab('Messages');
                setIsDmOpen(true);
              }}
              onUpload={() => setIsUploadModalOpen(true)}
            />
          )}

          {currentTab === 'Appointments' && (
            <AppointmentsScreen
              onConsult={() => setIsConsultModalOpen(true)}
              booked={isBooked}
            />
          )}

          {currentTab === 'Messages' && (
            <MessagesScreen
              sent={isMessageSent}
              onSend={() => setIsMessageSent(true)}
              onOpenDm={() => setIsDmOpen(true)}
            />
          )}

          {currentTab === 'Profile' && (
            <ProfileScreen
              onTab={handleTab}
              onLogout={() => {
                setAppFlow('splash');
                setCurrentTab('Home');
              }}
            />
          )}
        </div>

        <BottomNav activeTab={currentTab} onSelectTab={handleTab} />

        {isNotificationsOpen && (
          <NotificationsModal onClose={() => setIsNotificationsOpen(false)} />
        )}

        {isConsultModalOpen && (
          <BookConsultationModal
            onClose={() => setIsConsultModalOpen(false)}
            onBookSuccess={() => setIsBooked(true)}
          />
        )}

        {isUploadModalOpen && (
          <UploadDocumentModal onClose={() => setIsUploadModalOpen(false)} />
        )}

        {isDmOpen && (
          <DirectMessageScreen
            sent={isMessageSent}
            onClose={() => setIsDmOpen(false)}
            onSend={() => setIsMessageSent(true)}
          />
        )}
      </div>
    );
  };

  return (
    <ResponsiveDeviceWrapper>
      {renderActiveScreen()}
    </ResponsiveDeviceWrapper>
  );
}

export default App;
