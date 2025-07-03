import { Button, useTheme } from "@mui/material";
import { useLinkTree } from "../../hooks/LinkTreeHook";
import { useTheme as useThemeHook } from "../../../../hooks/ThemeHook";
import { catppuccinLatte, catppuccinMocha } from "../../../../theme";
import { IconComponent } from "../../../../components/IconComponent/IconComponent";
import { LinkListContainer } from "./LinkList.styles";

export const LinkList: React.FC = () => {
  const { data } = useLinkTree();
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
        <Button
          key={`link-button-${index}`}
          variant="contained"
          fullWidth
          href={link.url}
          startIcon={link.icon ? <IconComponent icon={link.icon} /> : null}
          sx={{
            backgroundColor: link.background
              ? getBackgroundColor(
                  link.background as keyof typeof catppuccinMocha
                )
              : accentColors[index % accentColors.length],
            color: theme.palette.custom.buttonText,
            justifyContent: "flex-start",
            "&:hover": {
              backgroundColor: link.background
                ? getBackgroundColor(
                    link.background as keyof typeof catppuccinMocha
                  )
                : accentColors[index % accentColors.length],
              filter: "brightness(1.15)",
            },
          }}
        >
          {link.title}
        </Button>
      ))}
    </LinkListContainer>
  );
};
