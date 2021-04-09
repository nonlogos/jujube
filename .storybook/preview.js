import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { globalStyles as styles, themeCreator } from '../src/theme';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { DocsContainerTheme } from './docContainerTheme';
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  darkMode: {
    stylePreview: true,
    current: 'light',
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' }
  },
  backgrounds: { disable: true },
  docs: {
    // custom theme for sb-docs to handle dark mode
    container: DocsContainerTheme,
  },
  controls: { expanded: true },
}

const GlobalStyles = createGlobalStyle`
  ${styles}
`;


const withThemeProvider = ( Story, context ) => {
  const themeMode = useDarkMode() ? 'dark' : 'light';
  const theme = themeCreator(themeMode);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];