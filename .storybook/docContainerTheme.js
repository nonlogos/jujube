import React from 'react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { useDarkMode } from 'storybook-dark-mode';
import styled from 'styled-components';

import { darkPalleteTheme, lightPalleteTheme } from '../src/theme';

const StyledContainer = styled.div`
  & .sbdocs-preview, table {
    border: ${( { isDark } ) => ( isDark ? '1px solid rgb(20, 20, 20)' : 'none' )};
  }
  & .css-t7viak,
  .sbdocs,
  .css-11xgcgt,
  .docblock-propstable-head,
  .docblock-propstable-head > * > *,
  .docblock-propstable-body,
  .docblock-propstable-body > *,
  .docblock-propstable-body > * > *,
  .docblock-propstable-body > * > * > *,
  .docblock-argstable-head > *,
  .docblock-argstable-head > * > *,
  .docblock-argstable-head > * > * > *
  {
    background: ${( { isDark } ) => ( isDark ? '#333' : 'white' )} !important;
    color: ${( { isDark } ) => ( isDark ? darkPalleteTheme.text.primary : lightPalleteTheme.text.primary )} !important;
  }
  & .sbdocs-preview {
    background: ${( { isDark } ) => ( isDark ? darkPalleteTheme.background.default : lightPalleteTheme.background.default )} !important;
  }
  & .docblock-argstable-body > tr,
  & .docblock-argstable-head > tr {
    border-bottom: ${( { isDark }) => ( isDark ? '1px solid black' : 'none' )};
  }
  & .docblock-argstable-body > tr > td {
    background: ${( { isDark } ) => ( isDark ? '#202020' : 'white' )} !important;
    color: ${( { isDark } ) => ( isDark ? darkPalleteTheme.text.primary : lightPalleteTheme.text.primary )} !important;
  }
  & .sbdocs > code,
  & .css-16d4d7t,
  & .css-3zww90,
  & .os-content-glue {
    background: ${( { isDark } ) => ( isDark ? 'black' : 'inherit')};
    color: ${( { isDark } ) => ( isDark ? 'white' : 'rgba(51,51,51,0.9)')};
    border: ${( { isDark } ) => ( isDark ? '1px solid black' : '1px solid #EEE')};
  }
  & .innerZoomElementWrapper {
    display: flex;
    & > div, & > div > div, & > div > div > div {
      display: flex;
      flex: auto;
    }
  }
`;

export const DocsContainerTheme = ({ children, context }) => {
  const dark = useDarkMode();
  return (
    <StyledContainer isDark={dark}>
      <DocsContainer context={context}>{children}</DocsContainer>
    </StyledContainer>
  )
}