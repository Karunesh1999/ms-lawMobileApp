import type { ReactNode, MouseEvent } from 'react';

interface ModalWrapperProps {
  children: ReactNode;
  onClose: () => void;
}

export function ModalWrapper({ children, onClose }: ModalWrapperProps) {
  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="overlay" onMouseDown={onClose}>
      <div className="modal" onMouseDown={handleModalClick}>
        {children}
      </div>
    </div>
  );
}

