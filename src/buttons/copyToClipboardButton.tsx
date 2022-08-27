import React, { FC, SyntheticEvent, useState, useEffect, useContext, ReactNode } from "react";
import styled from "@emotion/styled";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, GithubLogo } from "phosphor-react";
import { copyToClipboard } from "../helpers";
import { useTheme } from "../hooks/useTheme";
import { shortTransitionDuration } from "../styles/transition";


const StyledCopyToClipboardButton = styled.button<{
  readonly isActive : boolean;
  readonly isDark : boolean;
}>`
  color: ${props => props.isDark ? 'var(--light-gray)' : 'var(--medium-dark-gray)'};
  transition: color ${shortTransitionDuration}s;

  background: transparent;

  width: 45px;
  height: 45px;

  border: none;
  outline: none;

  &:hover{
    cursor: ${props => props.isActive ? 'default' : 'pointer'};
  }
`;

// https://stackoverflow.com/questions/44369706/react-typescript-usage-of-classname-prop

export const CopyToClipboardButton : FC<{
  readonly textToCopy? : string;

} & React.HTMLAttributes<HTMLButtonElement>> = ({ textToCopy }) => {
  const [isActive, setIsActive] = useState(false);

  const duration = 0.3;

  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const boxVariants = {
    animate: {
      pathLength: isActive ? 0 : 1,
      transition: {
        duration,
      },
    },
  };
  const tickVariants = {
    animate: {
      pathLength: isActive ? 1 : 0,
      transition: {
        duration,
      },
    },
  };

  // useMotionValue hook for capturing existing animating property (via motion values)
  const pathLengthBox = useMotionValue<number>(boxVariants.animate.pathLength);
  // pathLength.onChange(() => {
  //   console.log(`Path length is at ${pathLength.get()}`);
  // });
  // useEffect(() => {
  //   pathLengthBox.set(isActive ? 0 : 1);
  // }, [isActive]);

  // useTransform hook for generating new property to be animated using motion values
  // When pathLength is 0.95, opacity = 1 ;
  // When pathLength is 0.60, opacity = 0
  const opacityBox = useTransform(pathLengthBox, [0.60, 0.95], [0, 1]);

  // Reset state of the button after 3 seconds
  useEffect(() => {
    if (isActive) {
      setTimeout(() => setIsActive(false), 2000);
    }
  }, [isActive]);

  return (
    <StyledCopyToClipboardButton
      isActive={isActive}
      onClick={() => {
        if (!isActive) {
          copyToClipboard(textToCopy);
          setIsActive(true);
          console.log(`Copy to clipboard button activated`);
        }
      }}
      isDark={isDark}
    >
      <motion.svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M20.8511 9.46338H11.8511C10.7465 9.46338 9.85107 10.3588 9.85107 11.4634V20.4634C9.85107 21.5679 10.7465 22.4634 11.8511 22.4634H20.8511C21.9556 22.4634 22.8511 21.5679 22.8511 20.4634V11.4634C22.8511 10.3588 21.9556 9.46338 20.8511 9.46338Z"
          stroke="currentColor"
          strokeWidth="2"
          whileHover="whileHover"
          whileTap="whileTap"
          animate="animate"
          variants={boxVariants}
          style={{
            opacity: opacityBox,
            pathLength: pathLengthBox
          }}
        />
        <motion.path
          d="M5.85107 15.4634H4.85107C4.32064 15.4634 3.81193 15.2527 3.43686 14.8776C3.06179 14.5025 2.85107 13.9938 2.85107 13.4634V4.46338C2.85107 3.93295 3.06179 3.42424 3.43686 3.04917C3.81193 2.67409 4.32064 2.46338 4.85107 2.46338H13.8511C14.3815 2.46338 14.8902 2.67409 15.2653 3.04917C15.6404 3.42424 15.8511 3.93295 15.8511 4.46338V5.46338"
          stroke="currentColor"
          strokeWidth="2"
          whileHover="whileHover"
          whileTap="whileTap"
          animate="animate"
          variants={boxVariants}
          style={{
            opacity: opacityBox,
            pathLength: pathLengthBox
          }}
        />
        <motion.path
          d="M20 6L9 17L4 12"
          stroke="currentColor"
          strokeWidth="2"
          animate="animate"
          variants={tickVariants}
        />
      </motion.svg>
    </StyledCopyToClipboardButton>
  );
}