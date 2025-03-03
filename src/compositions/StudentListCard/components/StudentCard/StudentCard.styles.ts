import { styled } from 'styled-components';

export const StyledStudentNumber = styled.div`
  background-color: #4285f4;
  color: #fff;
  padding: 5px 0;
  text-align: center;
`;

export const StyledStudentName = styled.div`
  padding: 15px 0;
  text-align: center;
  font-weight: bold;
`;

export const StyledPointsButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 5px 5px;
`;

export const StyledPointsButton = styled.button<{ type: string }>`
  background-color: ${(props) =>
    props.type === 'down' ? '#f44336' : '#4caf50'};
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 2px 5px;
  cursor: pointer;
  &:disabled {
    background-color: #9e9e9e;
    cursor: not-allowed;
  }
`;

export const StyledPointsCount = styled.span`
  display: inline-block;
  text-align: center;
  width: 20px;
`;

export const StyledStudentCard = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isGuest',
})<{ isGuest?: boolean }>`
  border: 1px solid #eee;
  border-radius: 5px;

  ${({ isGuest }) =>
    isGuest &&
    `
      ${StyledStudentNumber} {
        background-color: #9e9e9e;
      }

      ${StyledStudentName} {
        color: #9e9e9e;
      }

      ${StyledPointsButton} {
        background-color: #9e9e9e;
      } 
  `}
`;
