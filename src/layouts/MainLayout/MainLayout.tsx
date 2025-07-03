import { Outlet } from "react-router";
import { MainLayoutContainer, ThemeChangeButton } from "./MainLayout.styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
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
          {theme === "light" ? <LightModeIcon /> : <DarkModeOutlinedIcon />}
        </ThemeChangeButton>
      </Tooltip>
      <Outlet />
    </MainLayoutContainer>
  );
};
