import styled from "@emotion/styled";
import { Box, type BoxProps } from "@mui/material";

export const CenteredContainer = styled((props: BoxProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      gap: 5,
      width: "100%",
      maxWidth: "sm",
      height: "100%",
      p: 2,
    }}
    {...props}
  />
))``;
