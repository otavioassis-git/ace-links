import { Button, Typography } from "@mui/material";
import { catppuccinLatte, catppuccinMocha } from "../../theme";
import { NotFoundContainer } from "./NotFound.styles";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { useNavigate } from "react-router";

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <ReportProblemIcon
        sx={{
          fontSize: 64,
          color: (theme) =>
            theme.palette.mode === "dark"
              ? catppuccinMocha.red
              : catppuccinLatte.red,
        }}
      />
      <Typography variant="h4">404 - Page Not Found</Typography>
      <Typography color="text.secondary">
        Oops! The page you're looking for doesn't exist. It might have been
        moved or deleted.
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Go Back to Home
      </Button>
    </NotFoundContainer>
  );
};
