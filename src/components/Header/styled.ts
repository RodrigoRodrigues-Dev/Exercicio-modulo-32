import styled from 'styled-components';
import colors from '../../styles/colors';

export const HeaderStyled = styled.header`
  position: relative;
  background-color: ${colors.PrimaryColor1};
  color: ${colors.PrimaryColor2};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const OwlSVG = styled.svg`
  position: absolute;
`;

export const ShapeSVG = styled.svg`
  position: absolute;
  top: 0;
  width: 100vw;
`;
