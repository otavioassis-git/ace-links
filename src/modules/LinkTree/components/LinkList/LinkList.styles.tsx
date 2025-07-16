import styled from "@emotion/styled";
import { Box, Paper, type BoxProps, type PaperProps } from "@mui/material";

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

export const EditSectionContainer = styled(({ sx, ...props }: PaperProps) => (
  <Paper
    elevation={0}
    sx={{
      position: "absolute",
      right: "calc(-84px - 1rem)",
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      gap: 0.5,
      p: 0.5,
      ...sx,
    }}
    {...props}
  />
))``;
