import { Box, Link, Typography } from "@mui/material";
import { CenteredContainer } from "../../../../components/Styles/CenteredContainer.styles";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useNavigate } from "react-router";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <CenteredContainer>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          Login to your account
        </Typography>
        <Typography variant="caption">
          Or{" "}
          <Link
            onClick={() => navigate("/register")}
            underline="hover"
            sx={{ cursor: "pointer" }}
          >
            create an account
          </Link>
        </Typography>
      </Box>
      <LoginForm />
    </CenteredContainer>
  );
};
