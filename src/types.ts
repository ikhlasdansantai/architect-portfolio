export interface PartnersItem {
  icon: JSX.Element | string;
  title: string;
}

export interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  benefits: string[];
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    smallPhone: true;
  }
}
