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
  IconButton,
  Link,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useLogin } from "../../hooks/LoginHook";
import { getInitials } from "../../utils/get-initials";
import { useState } from "react";

export const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useParams<{ username: string }>();
  const theme = useTheme();
  const { theme: mode, setTheme } = useThemeHook();
  const { user, setUser } = useLogin();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openUserMenu = Boolean(anchorEl);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = () => {
    setTheme(mode === "dark" ? "light" : "dark");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(undefined);
    handleCloseUserMenu();
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleCloseUserMenu();
  };

  return (
    <MainLayoutContainer>
      <Tooltip title={`Change Theme to ${mode === "dark" ? "Light" : "Dark"}`}>
        <ThemeChangeButton onClick={handleThemeChange}>
          {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
        </ThemeChangeButton>
      </Tooltip>
      <UserContainer>
        <IconButton onClick={handleOpenUserMenu}>
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
        <Menu
          anchorEl={anchorEl}
          open={openUserMenu}
          onClose={handleCloseUserMenu}
          slotProps={{
            list: {
              "aria-labelledby": "basic-button",
            },
          }}
        >
          {user ? (
            <>
              {user.username !== username && (
                <MenuItem
                  onClick={() => handleNavigate(`/user/${user?.username}`)}
                >
                  <Typography variant="body1">See Profile</Typography>
                </MenuItem>
              )}
              <MenuItem
                onClick={() => handleNavigate(`/user/${user?.username}/edit`)}
              >
                <Typography variant="body1">Edit Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Typography variant="body1">Logout</Typography>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={() => handleNavigate("/")}>
                <Typography variant="body1">Regsiter</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleNavigate("/login")}>
                <Typography variant="body1">Login</Typography>
              </MenuItem>
            </>
          )}
        </Menu>
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
