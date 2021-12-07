import { normalize } from 'styled-normalize';
import { css } from 'styled-components';
import RobotoFlexFont from '@bit/nonlogos.jujube-ui.assets.fonts/RobotoFlex.woff';

import { DefaultTheme } from 'styled-components';
import { baseTheme, typography, lightPalleteTheme } from './';
import { IHeading } from './styled';
import { findObjectValue } from '../utils/helperFunctions';

type IHeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'subtitle1' | 'subtitle2';

const globalStyles = (theme: DefaultTheme) => {
  const SM_BREAKPOINT = findObjectValue(theme, 'breakpoints', 'sm') || baseTheme.breakpoints.sm;
  const MD_BREAKPOINT = findObjectValue(theme, 'breakpoints', 'md') || baseTheme.breakpoints.md;
  return css`
    :root {
      --base-font-size: max(1rem, ${(theme.typography && theme.typography.fontSize) || typography.fontSize});
      --main-font-family: ${(theme.typography && theme.typography.fontFamily) || typography.fontFamily};
      --main-bkgd: ${findObjectValue(theme, 'background', 'default') || lightPalleteTheme.background.default};
    }

    @media (max-width: ${MD_BREAKPOINT}px) {
      :root {
      }
    }

    @media (max-width: ${SM_BREAKPOINT}px) {
      :root {
      }
    }

    /****** normalize browser css settings *******/
    ${normalize}
    @font-face {
      font-family: 'Roboto Flex';
      src: local('Roboto Flex'), local('Roboto Flex'), url(${RobotoFlexFont}) format('woff2 supports variations'),
        url(${RobotoFlexFont}) format('woff2-variations');
      font-weight: 100 1000;
      font-stretch: 25% 151%;
      font-display: swap;
    }
    /****** Elad Shechter's RESET *******/
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
    button {
      background-color: transparent;
      color: inherit;
      border-width: 0;
      padding: 0;
      cursor: pointer;
    }
    figure {
      margin: 0;
    }
    input::-moz-focus-inner {
      border: 0;
      padding: 0;
      margin: 0;
    }
    ul,
    ol,
    dd {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
    }
    cite {
      font-style: normal;
    }
    fieldset {
      border-width: 0;
      padding: 0;
      margin: 0;
    }
    /****** [end] Elad Shechter's RESET *******/

    html {
      background: var(--main-bkgd);
      color: ${findObjectValue(theme, 'text', 'primary') || lightPalleteTheme.text.primary};
      font-size: var(--base-font-size);
      & body {
        direction: ${theme.direction || baseTheme.direction};
        font-family: var(--main-font-family);
      }
    }
    /****** Types will scale with modules *******/
    h1 {
      ${setFontStyles(theme, 'h1')}
    }
    h2 {
      ${setFontStyles(theme, 'h2')}
    }
    h3 {
      ${setFontStyles(theme, 'h3')}
    }
    h4 {
      ${setFontStyles(theme, 'h4')}
    }
    h5 {
      ${setFontStyles(theme, 'h5')}
    }
    h6 {
      ${setFontStyles(theme, 'h6')}
    }
  `;
};

export default globalStyles;

export const setFontStyles = (theme: DefaultTheme, heading: IHeadingTypes) => {
  const typeSettings: IHeading = {};
  if (theme.typography && theme.typography[heading]) {
    const defaultSetting = theme.typography[heading];
    if (defaultSetting) {
      typeSettings.fontFamily = defaultSetting.fontFamily;
      typeSettings.fontWeight = defaultSetting.fontWeight;
      typeSettings.fontStretch = defaultSetting.fontStretch;
      typeSettings.lineHeight = defaultSetting.lineHeight;
      typeSettings.letterSpacing = defaultSetting.letterSpacing;
      typeSettings.fontSize = defaultSetting.fontSize;
    }
  }
  return css`
    font-family: ${(typeSettings && typeSettings.fontFamily) || typography[heading].fontFamily};
    font-weight: ${(typeSettings && typeSettings.fontWeight) || typography[heading].fontWeight};
    font-stretch: ${(typeSettings && typeSettings.fontStretch) || typography[heading].fontStretch};
    line-height: ${(typeSettings && typeSettings.lineHeight) || typography[heading].lineHeight};
    letter-spacing: ${(typeSettings && typeSettings.letterSpacing) || typography[heading].letterSpacing};
    font-size: ${(typeSettings && typeSettings.fontSize) || typography[heading].fontSize};
  `;
};
