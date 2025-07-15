import { Box, styled, type BoxProps } from "@mui/material";

export const FormTextFieldContainer = styled((props: BoxProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
    }}
    {...props}
  />
))``;
