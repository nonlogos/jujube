import React from 'react';
import styled from 'styled-components';
import IPaperProps from './paperComponentProps';
import { findObjectValue } from '../../utils/helperFunctions';
import { baseTheme, shadow, lightPalleteTheme, setFontStyles } from '../../theme';

export const PaperComponent = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ children, component = 'div', className, action, elevation, ...props }: IPaperProps, ref) => {
    const handleClick = () => {
      action && action();
    };
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <Paper as={component} ref={ref} className={className} onClick={handleClick} $elevation={elevation} {...props}>
        {children}
      </Paper>
    );
  }
);

const Paper = styled.div`
  background: ${({ theme }: IPaperProps) => {
    const bkgd = findObjectValue(theme, 'container');
    return bkgd || lightPalleteTheme.background.container;
  }};
  box-sizing: border-box;
  display: block;
  color: ${({ theme }: IPaperProps) => {
    const txtColor = findObjectValue(theme, 'text', 'primary');
    return txtColor || lightPalleteTheme.text.primary;
  }};
  border-radius: ${({ theme, squareCorners }) => {
    const borderRadius = findObjectValue(theme, 'shape', 'borderRadius');
    const radius = squareCorners ? '0px' : `${borderRadius || baseTheme.shape.borderRadius}px`;
    return `var(--border-radius, ${radius})`;
  }};
  box-shadow: ${({ $elevation }: IPaperProps) => {
    return $elevation ? shadow[$elevation] : shadow[1];
  }};
  padding: ${({ theme }) => {
    const makeSpace = theme.spacing && theme.spacing.space;
    const paddingSpace = (makeSpace && makeSpace(2)) || baseTheme.spacing.space(2);
    return `var(--padding-reset, ${paddingSpace})`;
  }};
  list-style: none;
  & p {
    ${({ theme }) => setFontStyles(theme, 'body2')}
  }
  ${({ customstyles }) => customstyles}
`;
export default PaperComponent;

PaperComponent.displayName = 'PaperComponent';
Paper.displayName = 'Paper';
