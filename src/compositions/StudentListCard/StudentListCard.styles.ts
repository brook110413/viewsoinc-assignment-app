import { styled } from 'styled-components';

export const StyledClassTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const StyledTabContainer = styled.div`
  display: flex;
`;

export const StyledTab = styled.div<{ active?: boolean }>`
  padding: 15px 30px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? 'white' : '#f0f0f0')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  color: ${(props) => (props.active ? '#4285f4' : '#000')};
`;

export const StyledStudentGrid = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns ? `repeat(${props.columns}, 1fr)` : 'repeat(4, 1fr)'};
  grid-template-rows: auto auto;
  gap: 5px;
  overflow-y: auto;
  width: 100%;
  padding: 15px;
`;

export const StyledStudentCard = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
`;

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

export const StyledVoteButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px 5px 5px;
`;

export const StyledVoteButton = styled.button<{ type: string }>`
  background-color: ${(props) =>
    props.type === 'down'
      ? '#f44336'
      : props.type === 'up'
      ? '#4caf50'
      : '#e0e0e0'};
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 2px 5px;
`;

export const StyledVoteCount = styled.span`
  display: inline-block;
  text-align: center;
`;
