import styled from 'styled-components';

export const CardContactStyled = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 14px;

  &:hover {
    cursor: pointer;
    background-color: rgba(119, 135, 139, 0.5);
  }
`;

export const ArrowSVG = styled.svg`
  position: absolute;
  right: 16px;
`;

export const ConcactInfos = styled.div`
  margin-left: 8px;
`;
