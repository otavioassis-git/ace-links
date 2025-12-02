import styled from "@emotion/styled";
import { Box, type BoxProps } from "@mui/material";

export const UserSummaryContainer = styled((props: BoxProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      gap: 1,
    }}
    {...props}
  />
))``;

export const EditableUserSummaryContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
`;
