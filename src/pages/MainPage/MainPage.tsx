import { Button, Typography, useTheme } from "@mui/material";
import { MainPageContainer } from "./MainPage.styles";
import { ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router";

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <MainPageContainer>
      <img src="/icon.png" alt="Ace Links Logo" width="100" />
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
        variant="h5"
        color="text.secondary"
        textAlign="center"
        fontWeight="normal"
        lineHeight={1.5}
        maxWidth={600}
      >
        Welcome to{" "}
        <b style={{ color: theme.palette.primary.main }}>Ace Links!</b> The only
        link you'll ever need. Create your personalized page in seconds and
        share all your important links with a single URL.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        endIcon={<ArrowRight />}
        sx={{ padding: "15px 30px", fontSize: "1.2rem" }}
        onClick={() => navigate("/register")}
      >
        Get Started for Free
      </Button>
    </MainPageContainer>
  );
};
