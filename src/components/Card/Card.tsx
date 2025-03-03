import { useState } from 'react';
import {
  StyledCard,
  StyledCardContent,
  StyledCloseButton,
} from './Card.styles';
import { StyledIcon } from '@/styles';
interface CardProps {
  children: React.ReactNode;
  background?: string;
}

export const Card = ({ children, background }: CardProps) => {
  const [isClose, setIsClose] = useState(false);

  const handleClose = () => setIsClose(true);

  if (isClose) return null;

  return (
    <StyledCard background={background}>
      <StyledCloseButton onClick={handleClose}>
        <StyledIcon className="material-icons" size={24}>
          close
        </StyledIcon>
      </StyledCloseButton>
      <StyledCardContent>{children}</StyledCardContent>
    </StyledCard>
  );
};
