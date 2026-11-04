import type { ComponentType } from 'react';
import { ChevronRight } from 'lucide-react';

interface ActionCardProps {
  icon: ComponentType<{ size?: number }>;
  label: string;
  onClick?: () => void;
}

export function ActionCard({ icon: Icon, label, onClick }: ActionCardProps) {
  return (
    <button className="action-card" onClick={onClick}>
      <span>
        <Icon size={19} />
      </span>
      <strong>{label}</strong>
      <ChevronRight size={15} />
    </button>
  );
}

