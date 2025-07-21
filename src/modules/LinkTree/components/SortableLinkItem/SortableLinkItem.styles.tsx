import {
  ListItem,
  Paper,
  styled,
  type ListItemProps,
  type PaperProps,
} from "@mui/material";

export const SortableLinkItemContainer = styled((props: ListItemProps) => (
  <ListItem
    sx={{ display: "flex", gap: 1, p: 0, userSelect: "none" }}
    {...props}
  />
))``;

export const EditSectionContainer = styled(({ sx, ...props }: PaperProps) => (
  <Paper
    elevation={0}
    sx={{
      display: "flex",
      gap: 0.5,
      p: 0.5,
      ...sx,
    }}
    {...props}
  />
))``;
