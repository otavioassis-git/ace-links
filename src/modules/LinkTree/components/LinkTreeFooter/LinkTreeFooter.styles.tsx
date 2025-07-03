import styled from "@emotion/styled";
import { Box, type BoxProps } from "@mui/material";

export const LinkTreeFooterContainer = styled((props: BoxProps) => (
  <Box
    sx={{
      position: "absolute",
      bottom: "2rem",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 10,
    }}
    {...props}
  />
))``;
