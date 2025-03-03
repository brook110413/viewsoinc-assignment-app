import { useEffect, useCallback } from 'react';
import { StyledMenu, StyledMenuItem } from './Menu.styles';

interface MenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Menu = ({ anchorEl, open, onClose, children }: MenuProps) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (anchorEl && !anchorEl.contains(event.target as Node)) {
        onClose();
      }
    },
    [anchorEl, onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, handleClickOutside]);

  if (!open || !anchorEl) return null;

  const rect = anchorEl.getBoundingClientRect();

  return (
    <StyledMenu
      top={rect.bottom + window.scrollY}
      right={window.innerWidth - rect.right}
    >
      {children}
    </StyledMenu>
  );
};

Menu.Item = StyledMenuItem;
