import styled from 'styled-components';
import { media } from './breakpoints';

export * from './GlobalStyle';

export const StyledAppBackground = styled.div`
  background-image: url('/src/assets/images/app-background.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  min-width: 100%;
  position: relative;
  overflow: auto;
`;

export const StyledIcon = styled.i<{ size?: string }>`
  font-size: ${(props) => props.size || '14px'};
`;

export const StyledClassroomContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;

  ${media.desktop} {
    min-height: 100vh;
    flex-direction: row;
  }
`;
