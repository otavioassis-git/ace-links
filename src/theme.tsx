import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      accents: string[];
      buttonText: string;
      avatarBorder: string;
      handleText: string;
      footerText: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      accents?: string[];
      buttonText?: string;
      avatarBorder?: string;
      handleText?: string;
      footerText?: string;
    };
  }
}

const catppuccinMocha = {
  rosewater: "#f5e0dc",
  flamingo: "#f2cdcd",
  pink: "#f5c2e7",
  mauve: "#cba6f7",
  red: "#f38ba8",
  maroon: "#eba0ac",
  peach: "#fab387",
  yellow: "#f9e2af",
  green: "#a6e3a1",
  teal: "#94e2d5",
  sky: "#89dceb",
  sapphire: "#74c7ec",
  blue: "#89b4fa",
  lavender: "#b4befe",
  text: "#cdd6f4",
  subtext1: "#bac2de",
  subtext0: "#a6adc8",
  overlay2: "#9399b2",
  overlay1: "#7f849c",
  overlay0: "#6c7086",
  surface2: "#585b70",
  surface1: "#45475a",
  surface0: "#313244",
  base: "#1e1e2e",
  mantle: "#181825",
  crust: "#11111b",
};

const catppuccinLatte = {
  rosewater: "#dc8a78",
  flamingo: "#dd7878",
  pink: "#ea76cb",
  mauve: "#8839ef",
  red: "#d20f39",
  maroon: "#e64553",
  peach: "#fe640b",
  yellow: "#df8e1d",
  green: "#40a02b",
  teal: "#179299",
  sky: "#04a5e5",
  sapphire: "#209fb5",
  blue: "#1e66f5",
  lavender: "#7287fd",
  text: "#4c4f69",
  subtext1: "#5c5f77",
  subtext0: "#6c6f85",
  overlay2: "#7c7f93",
  overlay1: "#8c8fa1",
  overlay0: "#9ca0b0",
  surface2: "#acb0be",
  surface1: "#bcc0cc",
  surface0: "#ccd0da",
  base: "#eff1f5",
  mantle: "#e6e9ef",
  crust: "#dce0e8",
};

export const getTheme = (mode: "dark" | "light") => {
  const palette = mode === "dark" ? catppuccinMocha : catppuccinLatte;
  return createTheme({
    palette: {
      mode,
      primary: { main: palette.mauve },
      secondary: { main: palette.peach },
      background: { default: palette.base, paper: palette.mantle },
      text: { primary: palette.text, secondary: palette.subtext1 },
      custom: {
        accents: [
          palette.peach,
          palette.green,
          palette.blue,
          palette.mauve,
          palette.red,
          palette.teal,
        ],
        buttonText:
          mode === "dark" ? catppuccinMocha.base : catppuccinLatte.base,
        avatarBorder: palette.surface2,
        handleText: palette.subtext0,
        footerText: palette.overlay1,
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h2: { fontWeight: 800 },
      h5: { fontWeight: 700 },
      body1: { fontSize: "1.1rem" },
      button: { textTransform: "none", fontWeight: 600, fontSize: "1rem" },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
            padding: "12px 24px",
            transition:
              "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: `0px 8px 25px ${
                mode === "dark" ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.1)"
              }`,
            },
          },
        },
      },
    },
  });
};
