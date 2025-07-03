import { Button, Typography } from "@mui/material";
import { MainPageContainer } from "./MainPage.styles";
import { ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router";

export const MainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainPageContainer>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          background: (theme) =>
            `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        One Link to Rule Them All
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        textAlign="center"
        sx={{ maxWidth: "600px" }}
      >
        Welcome to Ace Links! The only link you'll ever need. Create your
        personalized page in seconds and share all your important links with a
        single URL.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        endIcon={<ArrowRight />}
        sx={{ padding: "15px 30px", fontSize: "1.2rem" }}
        onClick={() => navigate("/login")}
      >
        Get Started for Free
      </Button>
    </MainPageContainer>
  );
};
