import { Box, styled, type BoxProps } from "@mui/material";

export const LinkFormContainer = styled((props: BoxProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 1,
      width: "calc(600px - 3rem)",
    }}
    {...props}
  />
))``;

export const ColorOptionPreview = styled((props: BoxProps) => (
  <Box
    sx={{
      height: 20,
      width: 20,
      borderRadius: 12,
    }}
    {...props}
  />
))``;
