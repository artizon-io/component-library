import { css } from '@emotion/react'
import { CardStyle } from './cardStyle';



export const GradientCardStyle = ({ colorFrom, colorTo, isDark } : {
  readonly colorFrom : string;
  readonly colorTo : string;
  readonly isDark : boolean;
}) => css`
  ${CardStyle({
    isDark
  })};

  &:hover {
    &:before {
      opacity: 0.8;
    }
  }

  position: relative;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: linear-gradient(to right, ${colorFrom}, ${colorTo});
    filter: blur(20px);

    opacity: 0;
    transition: opacity 0.5s;
  }
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: inherit;
    border-radius: inherit;
  }
`;