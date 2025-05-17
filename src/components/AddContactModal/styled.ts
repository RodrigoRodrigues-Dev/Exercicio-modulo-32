import styled from 'styled-components';
import colors from '../../styles/colors';

export const ModalStyled = styled.div`
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  padding: 24px;
  background-color: ${colors.Background};
`;

export const InputStyled = styled.input`
  background-color: ${colors.PrimaryColor4};
  border: 1px solid black;
  padding: 8px;
  border-radius: 8px;
  color: white;

  &:focus {
    outline: none;
  }
`;

export const Overlay = styled.div`
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const BtnAddContact = styled.button`
  font-size: 14px;
  background: transparent;
  color: white;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid white;
  transition: all ease-in 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${colors.PrimaryColor1};
  }
`;
