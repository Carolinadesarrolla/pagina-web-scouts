"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ColorTheme = "sea" | "coral" | "blue" | "red" | "orange" | "yellow" | "lavender";
export type ModeTheme = "light" | "dark";

interface ThemeContextType {
  theme: ColorTheme;
  mode: ModeTheme;
  setTheme: (theme: ColorTheme) => void;
  setMode: (mode: ModeTheme) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ColorTheme>("sea");
  const [mode, setModeState] = useState<ModeTheme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Restore saved theme color
    const savedTheme = localStorage.getItem("scout_theme_color") as ColorTheme | null;
    if (savedTheme && ["sea", "coral", "blue", "red", "orange", "yellow", "lavender"].includes(savedTheme)) {
      setThemeState(savedTheme);
    }

    // Restore saved mode or check system preference
    const savedMode = localStorage.getItem("scout_theme_mode") as ModeTheme | null;
    if (savedMode && ["light", "dark"].includes(savedMode)) {
      setModeState(savedMode);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setModeState("dark");
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      root.setAttribute("data-theme", theme);
      root.setAttribute("data-mode", mode);
      if (mode === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, [theme, mode]);

  const setTheme = (newTheme: ColorTheme) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("scout_theme_color", newTheme);
    }
  };

  const setMode = (newMode: ModeTheme) => {
    setModeState(newMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("scout_theme_mode", newMode);
    }
  };

  const toggleMode = () => {
    const nextMode = mode === "light" ? "dark" : "light";
    setMode(nextMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
