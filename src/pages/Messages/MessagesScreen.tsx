import { useState, type KeyboardEvent } from 'react';
import { Search, ChevronRight, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';

interface MessagesScreenProps {
  sent: boolean;
  onSend: () => void;
  onOpenDm: () => void;
}

export function MessagesScreen({ sent, onSend, onOpenDm }: MessagesScreenProps) {
  const [inputText, setInputText] = useState('');
  const [hasSent, setHasSent] = useState(sent);

  const handleSend = () => {
    if (inputText.trim()) {
      setHasSent(true);
      setInputText('');
      onSend();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing && e.keyCode !== 229) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <SectionHeader
        title="Messages"
        subtitle="Securely communicate with your legal team."
      />

      <div className="search-box">
        <Search size={17} />
        <input placeholder="Search conversations" aria-label="Search conversations" />
      </div>

      <button className="conversation selected" onClick={onOpenDm}>
        <div className="conversation-avatar">JW</div>
        <div className="conversation-body">
          <div>
            <strong>Jordan Williams</strong>
            <small>{hasSent ? 'Just now' : 'Today, 9:15 AM'}</small>
          </div>
          <p>
            {hasSent
              ? 'Thank you, I received your message.'
              : 'Your medical report has been reviewed.'}
          </p>
          <span className="conversation-case">MS-2026-001</span>
        </div>
        <span className="unread">1</span>
      </button>

      <div className="message-composer">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Write a secure message..."
          aria-label="Write a secure message"
          onKeyDown={handleKeyDown}
        />
        <button
          className="primary-button"
          onClick={handleSend}
          disabled={!inputText.trim()}
        >
          Send <ChevronRight size={15} />
        </button>
      </div>

      <div className="empty-message">
        <ShieldCheck size={25} />
        <h3>Your conversations are private</h3>
        <p>Messages with your legal team are protected and secure.</p>
      </div>

      <div className="bottom-space" />
    </>
  );
}

export default MessagesScreen;
