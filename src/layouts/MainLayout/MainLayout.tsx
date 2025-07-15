import { Outlet, useNavigate, useParams } from "react-router";
import {
  FooterContainer,
  MainLayoutContainer,
  ThemeChangeButton,
  UserContainer,
} from "./MainLayout.styles";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useTheme as useThemeHook } from "../../hooks/ThemeHook";
import {
  Avatar,
  Button,
  IconButton,
  Link,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useLogin } from "../../hooks/LoginHook";
import { getInitials } from "../../utils/get-initials";

export const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useParams<{ username: string }>();
  const theme = useTheme();
  const { theme: mode, setTheme } = useThemeHook();
  const { user } = useLogin();

  const handleThemeChange = () => {
    setTheme(mode === "dark" ? "light" : "dark");
  };

  return (
    <MainLayoutContainer>
      <Tooltip title={`Change Theme to ${mode === "dark" ? "Light" : "Dark"}`}>
        <ThemeChangeButton onClick={handleThemeChange}>
          {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
        </ThemeChangeButton>
      </Tooltip>
      <UserContainer>
        {username && user?.username === username ? (
          <Button size="small">Edit Profile</Button>
        ) : (
          <IconButton>
            <Avatar
              sx={{
                border: `1px solid ${theme.palette.custom.avatarBorder}`,
                bgcolor: theme.palette.custom.avatarBackground,
                color: theme.palette.text.primary,
              }}
            >
              {user ? getInitials(user?.name) : null}
            </Avatar>
          </IconButton>
        )}
      </UserContainer>
      <Outlet />
      <FooterContainer>
        <Typography
          variant="caption"
          sx={{ color: theme.palette.custom.footerText }}
        >
          Built by{" "}
          <Link
            onClick={() => navigate("/user/otavio.assis")}
            color="inherit"
            underline="hover"
            sx={{ cursor: "pointer" }}
          >
            otavio.assis
          </Link>
        </Typography>
      </FooterContainer>
    </MainLayoutContainer>
  );
};
