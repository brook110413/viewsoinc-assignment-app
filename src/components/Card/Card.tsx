import { useState } from 'react';
import { StyledIcon } from '@/styles';
import {
  StyledCard,
  StyledCardContent,
  StyledCloseButton,
} from './Card.styles';

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  const [isClose, setIsClose] = useState(false);

  const handleClose = () => setIsClose(true);

  if (isClose) return null;

  return (
    <StyledCard>
      <StyledCloseButton onClick={handleClose}>
        <StyledIcon className="material-icons" size={24}>
          close
        </StyledIcon>
      </StyledCloseButton>
      <StyledCardContent>{children}</StyledCardContent>
    </StyledCard>
  );
};
