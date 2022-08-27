import { css } from "@emotion/react";

export const FontStyle = ({
  size,
  weight,
  style = "normal",
  letterSpacing = 0.5,
  lineHeight = 2,
}: {
  readonly size: number;
  readonly weight: "light" | "normal" | "bold" | "superbold";
  readonly style?: "normal" | "italic";
  readonly letterSpacing?: number;
  readonly lineHeight?: number;
}) => css`
  font-size: ${size}px;
  font-style: ${style === "normal" ? "normal" : "italic"};
  font-weight: ${weight === "normal" ? 400 : (weight === "light" ? 300 : (weight === "superbold" ? 600 : 500))};
  letter-spacing: ${letterSpacing}px;
  line-height: ${lineHeight};
`;