import styled from "@emotion/styled";
import { Box, type BoxProps } from "@mui/material";

export const NotFoundContainer = styled((props: BoxProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    }}
    {...props}
  />
))``;
