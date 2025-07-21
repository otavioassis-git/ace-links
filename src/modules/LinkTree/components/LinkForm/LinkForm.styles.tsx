import { Box, styled, type BoxProps } from "@mui/material";

export const LinkFormContainer = styled((props: BoxProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 1,
      width: "50vw",
    }}
    {...props}
  />
))``;
