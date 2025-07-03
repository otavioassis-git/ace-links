import { Link, Typography, useTheme } from "@mui/material";
import { LinkTreeFooterContainer } from "./LinkTreeFooter.styles";
import { useNavigate } from "react-router";

export const LinkTreeFooter: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <LinkTreeFooterContainer>
      <Typography
        variant="caption"
        sx={{ color: theme.palette.custom.footerText }}
      >
        Powered by{" "}
        <Link
          onClick={() => navigate("/")}
          color="inherit"
          underline="hover"
          sx={{ cursor: "pointer" }}
        >
          Ace Links
        </Link>
      </Typography>
    </LinkTreeFooterContainer>
  );
};
