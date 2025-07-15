import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextProps = {
  theme: Theme;
  setTheme: (mode: Theme) => void;
};

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const theme = sessionStorage.getItem("theme");
    if (theme) {
      setThemeState(theme as Theme);
    } else {
      sessionStorage.setItem("theme", "dark");
    }
  }, []);

  const setTheme = (mode: Theme) => {
    sessionStorage.setItem("theme", mode);
    setThemeState(mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
