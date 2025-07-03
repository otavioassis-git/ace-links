import styled from "@emotion/styled";
import {
  Box,
  IconButton,
  type BoxProps,
  type IconButtonProps,
} from "@mui/material";

export const MainLayoutContainer = styled((props: BoxProps) => (
  <Box
    sx={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 1,
      height: "100vh",
      width: "100vw",
    }}
    {...props}
  />
))``;

export const ThemeChangeButton = styled((props: IconButtonProps) => (
  <IconButton
    sx={{
      position: "absolute",
      top: "1rem",
      right: "1rem",
      zIndex: 10,
    }}
    {...props}
  />
))``;

export const FooterContainer = styled((props: BoxProps) => (
  <Box
    sx={{
      position: "absolute",
      bottom: "0.5rem",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 10,
    }}
    {...props}
  />
))``;
