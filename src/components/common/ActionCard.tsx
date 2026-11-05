import type { ComponentType } from 'react';
import { ChevronRight } from 'lucide-react';

interface ActionCardProps {
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  onClick?: () => void;
}

export function ActionCard({ icon: Icon, label, onClick }: ActionCardProps) {
  return (
    <button type="button" className="action-card" onClick={onClick}>
      <span>
        <Icon size={17} />
      </span>
      <strong>{label}</strong>
      <ChevronRight size={14} className="shrink-0" />
    </button>
  );
}

export default ActionCard;
