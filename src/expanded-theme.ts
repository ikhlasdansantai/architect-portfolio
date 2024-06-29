import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    ascent?: Palette["primary"];
  }
  interface PaletteOptions {
    ascent?: PaletteOptions["primary"];
  }
}