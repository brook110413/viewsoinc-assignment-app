import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
  height: 700px;
  overflow: hidden;
  position: relative;
  padding: 30px 10px 10px;
`;

export const StyledCardContent = styled.div`
  padding: 20px;
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
