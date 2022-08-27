import { css } from '@emotion/react'

export const CardStyle = ({ isDark } : {
  readonly isDark: boolean;
}) => css`
  background: ${isDark ? 'var(--dark-gray)' : 'var(--white)'};

  border: 1px solid ${isDark ? 'var(--medium-dark-gray)' : 'var(--off-off-white)'};
  border-radius: 20px;

  padding: 50px 30px;
`;