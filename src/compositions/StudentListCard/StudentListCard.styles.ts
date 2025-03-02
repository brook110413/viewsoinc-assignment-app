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
  border-bottom: 1px solid #eee;
`;

export const StyledTab = styled.div<{ active?: boolean }>`
  padding: 15px 30px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? 'white' : '#f0f0f0')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

export const StyledStudentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 15px;
  overflow-y: auto;
  height: calc(100% - 120px);
`;

export const StyledStudentCard = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  overflow: hidden;
`;

export const StyledStudentNumber = styled.div`
  background-color: #4285f4;
  color: white;
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
  color: white;
  border: none;
  border-radius: 3px;
  padding: 2px 5px;
  width: 30px;
`;

export const StyledVoteCount = styled.span`
  display: inline-block;
  width: 30px;
  text-align: center;
`;
