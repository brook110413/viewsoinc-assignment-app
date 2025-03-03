import { media } from '@/styles/breakpoints';
import { styled } from 'styled-components';

export const StyledClassTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  ${media.tablet} {
    font-size: 18px;
  }
`;

export const StyledTabContainer = styled.div`
  display: flex;
`;

export const StyledTab = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? 'white' : '#f0f0f0')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  color: ${(props) => (props.active ? '#4285f4' : '#000')};

  ${media.tablet} {
    padding: 15px 30px;
  }
`;

export const StyledStudentGrid = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'columns',
})<{ columns?: number }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns ? `repeat(${props.columns}, 1fr)` : 'repeat(4, 1fr)'};
  gap: 5px;
  overflow-y: auto;
  width: 100%;
  padding: 15px;
`;

export const StyledMenuButton = styled.button`
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
  }
`;

export const StyledControlSection = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
