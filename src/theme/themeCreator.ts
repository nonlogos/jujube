import { DefaultTheme } from 'styled-components';
import baseTheme from './baseTheme';
import typography from './typography';
import { spacing } from './spacing';
import shadow from './shadow';
import { darkPalleteTheme, lightPalleteTheme, palleteBaseTheme } from './pallete';

type themeMode = 'light' | 'dark';

const themeCreator = (themeType: themeMode = 'light'): DefaultTheme => {
  const theme = { ...baseTheme, typography, shadow };
  const themePallete = themeType === 'dark' ? darkPalleteTheme : lightPalleteTheme;
  const pallete = { ...palleteBaseTheme, ...themePallete };
  return { ...theme, pallete };
};

export default themeCreator;
