import React, { forwardRef, useEffect, useRef, useCallback, HTMLAttributes } from 'react';
import './Modal.css';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  footer?: React.ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      isOpen,
      onClose,
      title,
      size = 'md',
      closeOnOverlayClick = true,
      closeOnEscape = true,
      showCloseButton = true,
      footer,
      className = '',
      ...props
    },
    ref
  ) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);

    const handleEscape = useCallback(
      (event: KeyboardEvent) => {
        if (event.key === 'Escape' && closeOnEscape) {
          onClose();
        }
      },
      [closeOnEscape, onClose]
    );

    const handleOverlayClick = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget && closeOnOverlayClick) {
          onClose();
        }
      },
      [closeOnOverlayClick, onClose]
    );

    useEffect(() => {
      if (isOpen) {
        previousActiveElement.current = document.activeElement as HTMLElement;
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
        modalRef.current?.focus();
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }, [isOpen, handleEscape]);

    if (!isOpen) return null;

    return (
      <div
        className="ui-modal__overlay"
        onClick={handleOverlayClick}
        role="presentation"
        aria-hidden="true"
      >
        <div
          ref={ref || modalRef}
          className={`ui-modal ui-modal--${size} ${className}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
          tabIndex={-1}
          {...props}
        >
          {(title || showCloseButton) && (
            <div className="ui-modal__header">
              {title && (
                <h2 id="modal-title" className="ui-modal__title">
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  type="button"
                  className="ui-modal__close"
                  onClick={onClose}
                  aria-label="Close modal"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
          )}
          <div className="ui-modal__body">{children}</div>
          {footer && <div className="ui-modal__footer">{footer}</div>}
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal';

export default Modal;
