import { useState, type KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';

interface DirectMessageScreenProps {
  sent: boolean;
  onClose: () => void;
  onSend: () => void;
}

export function DirectMessageScreen({ sent, onClose, onSend }: DirectMessageScreenProps) {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
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
    <div className="dm-screen">
      <header className="dm-header">
        <button
          type="button"
          className="icon-button"
          onClick={onClose}
          aria-label="Back to messages"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="dm-person">
          <div className="conversation-avatar">JW</div>
          <div>
            <strong>Jordan Williams</strong>
            <small>Assigned attorney · Online</small>
          </div>
        </div>
        <button className="icon-button" aria-label="Call attorney">
          <Phone size={17} />
        </button>
      </header>

      <div className="dm-case-pill">Workers' Compensation · MS-2026-001</div>

      <div className="dm-thread">
        <div className="message-bubble received">
          Hi Alex, your medical report has been reviewed. I'll share the next steps shortly.
          <small>9:15 AM</small>
        </div>
        {sent && (
          <div className="message-bubble sent">
            I have a question about my case update.
            <small>Just now</small>
          </div>
        )}
      </div>

      <div className="dm-composer">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Write a message..."
          aria-label="Write a message"
          onKeyDown={handleKeyDown}
        />
        <button
          className="primary-button"
          onClick={handleSend}
          disabled={!inputText.trim()}
          aria-label="Send message"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default DirectMessageScreen;

