import styled from "@emotion/styled";
import { Box, List, type BoxProps, type ListProps } from "@mui/material";

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

export const StyledList = styled((props: ListProps) => (
  <List
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 1.5,
    }}
    {...props}
  />
))``;
