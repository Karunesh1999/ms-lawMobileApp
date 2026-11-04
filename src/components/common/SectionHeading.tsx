import { ChevronRight } from 'lucide-react';

interface SectionHeadingProps {
  title: string;
  action?: string;
  onClick?: () => void;
}

export function SectionHeading({ title, action, onClick }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {action && (
        <button onClick={onClick}>
          {action} <ChevronRight size={14} />
        </button>
      )}
    </div>
  );
}
