import { Button, IconButton, useTheme } from "@mui/material";
import { useTheme as useThemeHook } from "../../../../hooks/ThemeHook";
import { catppuccinLatte, catppuccinMocha } from "../../../../theme";
import { IconComponent } from "../../../../components/IconComponent/IconComponent";
import { EditSectionContainer, LinkListContainer } from "./LinkList.styles";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useEditableLinkTree } from "../../hooks/EditableLinkTreeHook";

export const EditableLinkList: React.FC = () => {
  const { data } = useEditableLinkTree();
  const { theme: mode } = useThemeHook();
  const theme = useTheme();

  if (!data) return null;

  const { links } = data;

  const accentColors = theme.palette.custom.accents;

  const getBackgroundColor = (background: keyof typeof catppuccinMocha) => {
    return mode === "dark"
      ? catppuccinMocha[background]
      : catppuccinLatte[background];
  };

  return (
    <LinkListContainer>
      {links.map((link, index) => (
        <>
          <Button
            key={`link-button-${index}`}
            variant="contained"
            fullWidth
            startIcon={link.icon ? <IconComponent icon={link.icon} /> : null}
            sx={{
              position: "relative",
              backgroundColor: link.background
                ? getBackgroundColor(
                    link.background as keyof typeof catppuccinMocha
                  )
                : accentColors[index % accentColors.length],
              color: theme.palette.custom.buttonText,
              justifyContent: "flex-start",
              "&:hover": {
                transform: "none !important",
              },
              cursor: "default",
            }}
          >
            {link.title}
            <EditSectionContainer key={`edit-link-button-${index}`}>
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton>
                <DragHandleIcon />
              </IconButton>
            </EditSectionContainer>
          </Button>
        </>
      ))}
      <Button sx={{ width: "auto" }} startIcon={<AddIcon />}>
        Add link
      </Button>
    </LinkListContainer>
  );
};
