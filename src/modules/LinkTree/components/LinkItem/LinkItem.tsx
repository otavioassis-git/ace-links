import { Button, useTheme, type ButtonProps } from "@mui/material";
import { useTheme as useThemeHook } from "../../../../hooks/ThemeHook";
import { IconComponent } from "../../../../components/IconComponent/IconComponent";
import { catppuccinLatte, catppuccinMocha } from "../../../../theme";

export type LinkItemProps = ButtonProps & {
  link: Link;
  index: number;
  noRedirect?: boolean;
};

export const LinkItem: React.FC<LinkItemProps> = ({
  link,
  index,
  noRedirect,
  sx,
}) => {
  const theme = useTheme();
  const { theme: mode } = useThemeHook();
  const accentColors = theme.palette.custom.accents;

  const getBackgroundColor = (background: keyof typeof catppuccinMocha) => {
    return mode === "dark"
      ? catppuccinMocha[background]
      : catppuccinLatte[background];
  };

  return (
    <Button
      variant="contained"
      fullWidth
      href={noRedirect ? undefined : link.url}
      startIcon={link.icon ? <IconComponent icon={link.icon} /> : null}
      sx={{
        ...sx,
        backgroundColor: link.background
          ? getBackgroundColor(link.background as keyof typeof catppuccinMocha)
          : accentColors[index % accentColors.length],
        color: theme.palette.custom.buttonText,
        justifyContent: "flex-start",
        "&:hover": noRedirect
          ? { transform: "none !important" }
          : {
              backgroundColor: link.background
                ? getBackgroundColor(
                    link.background as keyof typeof catppuccinMocha
                  )
                : accentColors[index % accentColors.length],
              filter: "brightness(1.15)",
            },
        cursor: noRedirect ? "default" : "pointer",
      }}
    >
      {link.title}
    </Button>
  );
};
