import { Avatar, Typography, useTheme } from "@mui/material";
import { useLinkTree } from "../../hooks/LinkTreeHook";
import { useTheme as useThemeHook } from "../../../../hooks/ThemeHook";
import { UserSummaryContainer } from "./UserSummary.styles";

const PLACEHOLDER = "https://placehold.co/128x128/1e1e2e/cdd6f4?text=";
const LIGHT_PLACEHOLDER = "https://placehold.co/128x128/eff1f5/4c4f69?text=";

export const UserSummary: React.FC = () => {
  const { data } = useLinkTree();
  const { theme: mode } = useThemeHook();
  const theme = useTheme();

  if (!data) return null;

  const getInitials = (name: string) => {
    const nameSplit = name.split(" ");
    const [firstName, lastName] = [
      nameSplit[0],
      nameSplit[nameSplit.length - 1],
    ];
    return firstName.charAt(0) + lastName.charAt(0);
  };

  return (
    <UserSummaryContainer>
      <Avatar
        alt={data.username}
        src={
          mode === "dark"
            ? PLACEHOLDER + getInitials(data.fullname)
            : LIGHT_PLACEHOLDER + getInitials(data.fullname)
        }
        sx={{
          width: 100,
          height: 100,
          border: `3px solid ${theme.palette.custom.avatarBorder}`,
        }}
      />
      <Typography variant="h5" color="text.primary">
        {data.fullname}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: theme.palette.custom.handleText }}
      >
        @{data.username.toLowerCase()}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "center", maxWidth: "80%" }}
      >
        {data.description}
      </Typography>
    </UserSummaryContainer>
  );
};
