import styled from "@emotion/styled";
import { Box, type BoxProps } from "@mui/material";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const TextFieldContainer = styled((props: BoxProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
    }}
    {...props}
  />
))``;
