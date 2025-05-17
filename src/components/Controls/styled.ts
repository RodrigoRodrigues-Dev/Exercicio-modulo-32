import styled from 'styled-components';
import colors from '../../styles/colors';

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

export const BtnAddContact = styled.button`
  font-size: 16px;
  padding: 10px 22px;
  color: ${colors.PrimaryColor2};
  background: transparent;
  border: 1px solid ${colors.PrimaryColor4};
  border-radius: 8px;
  transition: all ease-in 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${colors.PrimaryColor1};
  }
`;
