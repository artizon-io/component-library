import styled from "@emotion/styled";
import React, { FC } from "react";

const ScrollProgressbarStyle = styled.div`
`;

export const ScrollProgressbar : FC<{}> = ({ ...props }) => {
  return (
    <ScrollProgressbarStyle {...props}>
    </ScrollProgressbarStyle>
  );
};