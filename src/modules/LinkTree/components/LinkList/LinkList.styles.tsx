import styled from "@emotion/styled";
import { Box, type BoxProps } from "@mui/material";

export const LinkListContainer = styled((props: BoxProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
      width: "100%",
    }}
    {...props}
  />
))``;
