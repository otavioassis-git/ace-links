import { Box, Link, Typography } from "@mui/material";
import { CenteredContainer } from "../../../../components/Styles/CenteredContainer.styles";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export const Login: React.FC = () => {
  return (
    <CenteredContainer>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          Login to your account
        </Typography>
        <Typography variant="caption">
          Or{" "}
          <Link href="/register" sx={{ textDecoration: "none" }}>
            create an account
          </Link>
        </Typography>
      </Box>
      <LoginForm />
    </CenteredContainer>
  );
};
