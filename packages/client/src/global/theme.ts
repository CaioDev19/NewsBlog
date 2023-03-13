export const theme = {
  COLORS: {
    gray: "	#E8E8E8",
    gray_100: "#F1F1F1",
    gray_200: "#6b7280",

    white: "#FFFF",
    whitesh: "#fafafa",

    black: "#000000",
    black_100: "#3C3C3C",
    black_200: "#27282C",
    black_300: "#1C1F24",
    black_400: "#0D0E10",

    red: "#e63946",

    orange_red: "#C74038",
    orange: "#F9A826",
    orange_light: "#F9C74F",

    blue: "#3399FF",
    blue_100: "#0038D6",
    light_blue: "#8FD5F4",
  },
  FONT_SIZE: {
    sml: "0.8rem",
    rgl: "1rem",
    lrg: "1.3rem",
    exl: "1.8rem",
  },
  FONT_WEIGHT: {
    wek: "400",
    str: "700",
    sstr: "900",
  },
  SPACERS: {
    sml: "0.87rem",
    rgl: "1rem",
    lrg: "1.3rem",
  },
  BREAKPOINTS: {
    mobile_small: 550,
    mobile: 800,
    tablet: 1000,
    notbook: 1250,
  },
}

export type Colors = keyof typeof theme.COLORS
export type FontSize = keyof typeof theme.FONT_SIZE
export type FontWeight = keyof typeof theme.FONT_WEIGHT
export type Spacers = keyof typeof theme.SPACERS
