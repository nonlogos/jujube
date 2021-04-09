import { spacing } from './spacing';

const baseTheme = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  direction: 'ltr',
  shape: {
    borderRadius: 4,
  },
  spacing: {
    base: 8,
    unit: 'px',
    space: spacing,
  },
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
};

export default baseTheme;
