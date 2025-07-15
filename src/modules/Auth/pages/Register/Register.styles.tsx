import styled from "@emotion/styled";
import { FormControl, type FormControlProps } from "@mui/material";

export const FormContainer = styled((props: FormControlProps) => (
  <FormControl
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
      width: "100%",
      flexWrap: "wrap",
    }}
    {...props}
  />
))``;
