import { DefaultTheme } from 'styled-components';
import { baseTheme, typography, shadow, darkPalleteTheme, lightPalleteTheme, palleteBaseTheme } from './';

type themeMode = 'light' | 'dark';

const themeCreator = (themeType: themeMode = 'light'): DefaultTheme => {
  const theme = { ...baseTheme, typography, shadow };
  const themePallete = themeType === 'dark' ? darkPalleteTheme : lightPalleteTheme;
  const pallete = { ...palleteBaseTheme, ...themePallete };
  return { ...theme, pallete };
};

export default themeCreator;
