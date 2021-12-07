import 'styled-components';

export interface IBreakpoints {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface IShape {
  borderRadius?: number;
}

export interface IDuration {
  shortest?: number;
  shorter?: number;
  short?: number;
  standard?: number;
  complex?: number;
  enteringScreen?: number;
  leavingScreen?: number;
}

export interface ISpacing {
  base?: number;
  unit?: string;
  space?: (...args: any[]) => string; //making the function generic so user can pass in their own
}

export interface ITypography {
  fontSize?: string;
  fontFamily?: string;
  fontWeightLight?: number;
  fontWeightRegular?: number;
  fontWeightMedium?: number;
  fontWeightBold?: number;
  h1?: IHeading;
  h2?: IHeading;
  h3?: IHeading;
  h4?: IHeading;
  h5?: IHeading;
  h6?: IHeading;
  subtitle1?: IHeading;
  subtitle2?: IHeading;
  body1?: IHeading;
  body2?: IHeading;
  button?: IHeading;
  caption?: IHeading;
}

export interface IHeading {
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: number;
  fontStretch?: string;
  letterSpacing?: string;
}

export interface IPalleteBase {
  light?: string;
  main?: string;
}

export interface IPalleteText {
  primary?: string;
  secondary?: string;
  disabled?: string;
  hint?: string;
}

export interface IPalleteBackground {
  container?: string;
  default?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints?: IBreakpoints;
    direction?: string;
    shape?: IShape;
    duration?: IDuration;
    shadow?: string[];
    typography?: ITypography;
    spacing?: ISpacing;
    pallete?: {
      common?: {
        black?: string;
        white?: string;
      };
      primary?: IPalleteBase;
      secondary?: IPalleteBase;
      info?: IPalleteBase;
      error?: IPalleteBase;
      warning?: IPalleteBase;
      success?: IPalleteBase;
      text?: IPalleteText;
      divider?: string;
      background?: IPalleteBackground;
    };
  }
}
