import { media } from '@/styles/breakpoints';
import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 300px;
  height: 400px;
  overflow: hidden;
  position: relative;
  padding: 30px 10px 10px;

  ${media.tablet} {
    width: 500px;
    height: 600px;
  }

  ${media.desktop} {
    width: 600px;
    height: 700px;
  }
`;

export const StyledCardContent = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  height: 100%;
`;

export const StyledCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;
