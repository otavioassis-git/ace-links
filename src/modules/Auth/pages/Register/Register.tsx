import { Button, TextField, Typography } from "@mui/material";
import { CenteredContainer } from "../../../../components/Styles/CenteredContainer.styles";
import { FormContainer } from "./Register.styles";

export const Register: React.FC = () => {
  return (
    <CenteredContainer>
      <Typography variant="h4" component="h1">
        Create your account
      </Typography>
      <FormContainer>
        <TextField label="First Name" variant="outlined" />
        <TextField label="Last Name" variant="outlined" />
        <TextField label="Username" variant="outlined" />
        <TextField label="Email" variant="outlined" />
        <TextField label="Password" variant="outlined" />
        <TextField label="Confirm Password" variant="outlined" />
      </FormContainer>
      <Button
        variant="contained"
        color="primary"
        sx={{ width: ["100%", "50%"] }}
      >
        Sign up
      </Button>
    </CenteredContainer>
  );
};
