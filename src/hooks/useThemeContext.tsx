// Components are now themed using css variables instead for perf improvement

import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

export const useThemeContext = () => useContext(ThemeContext);