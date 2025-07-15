import { Avatar, Typography, useTheme } from "@mui/material";
import { useLinkTree } from "../../hooks/LinkTreeHook";
import { UserSummaryContainer } from "./UserSummary.styles";

export const UserSummary: React.FC = () => {
  const { data } = useLinkTree();
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
        sx={{
          width: 100,
          height: 100,
          border: `3px solid ${theme.palette.custom.avatarBorder}`,
          bgcolor: theme.palette.custom.avatarBackground,
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: theme.palette.text.primary,
        }}
      >
        {getInitials(data.fullname)}
      </Avatar>
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
