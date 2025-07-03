import { Outlet } from "react-router";
import { MainLayoutContainer, ThemeChangeButton } from "./MainLayout.styles";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useTheme } from "../../hooks/ThemeHook";
import { Tooltip } from "@mui/material";

export const MainLayout: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <MainLayoutContainer>
      <Tooltip title={`Change Theme to ${theme === "dark" ? "Light" : "Dark"}`}>
        <ThemeChangeButton onClick={handleThemeChange}>
          {theme === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
        </ThemeChangeButton>
      </Tooltip>
      <Outlet />
    </MainLayoutContainer>
  );
};
