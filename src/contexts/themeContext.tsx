import React, { FC, useContext, createContext, useState, useEffect } from "react";


const defaultTheme = "light";

export const ThemeContext = createContext<{
  readonly theme: "light" | "dark";
  readonly toggleTheme: () => void;
}>({
  theme: defaultTheme,
  toggleTheme: () => {}
});