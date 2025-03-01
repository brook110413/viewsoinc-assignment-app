import { useState } from 'react';
import {
  StyledCard,
  StyledCardContent,
  StyledCloseButton,
} from './Card.styles';
import { StyledIcon } from '@/styles';
interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  const [isClose, setIsClose] = useState(false);

  const handleClose = () => setIsClose(true);

  if (isClose) return null;

  return (
    <StyledCard>
      <StyledCloseButton onClick={handleClose}>
        <StyledIcon className="material-icons" size="24px">
          close
        </StyledIcon>
      </StyledCloseButton>
      <StyledCardContent>{children}</StyledCardContent>
    </StyledCard>
  );
};
