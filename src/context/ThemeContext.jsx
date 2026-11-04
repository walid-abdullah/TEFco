"use client";

import React, { createContext, useContext } from 'react';

// The Signal design runs on one theme. Depth comes from coloured sections, not a toggle.
// The hook stays so components reading `theme` keep working.
const value = { theme: 'light', toggleTheme: () => {}, mounted: true };
const ThemeContext = createContext(value);

export function ThemeProvider({ children }) {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
