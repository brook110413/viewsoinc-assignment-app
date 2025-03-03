import styled from 'styled-components';

export const StyledMenu = styled.div<{ top: number; right: number }>`
  position: fixed;
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 200px;
`;

export const StyledMenuItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
