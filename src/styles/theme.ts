import { css } from "styled-components";

const colors = {
  baseFontColor: "#E5E9F0",
  descFontColor: "#607B96",
  blueFontColor: "#4D5BCE",
  greenFontColor: "#43D9AD",
  salmonFontColor: "#E99287",
  screenBgColor: "#011627",
  mainBorderColor: "#1e2d3d",
};
const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const resetBtnStyle = css`
  appearance: none;
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
const resetInputStyle = css`
  background: transparent;
  appearance: none;
  border: none;
  outline: none;
`;

export const theme = {
  ...colors,
  flexCenter,
  resetBtnStyle,
  resetInputStyle,
};
