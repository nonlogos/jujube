import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { baseTheme, lightPalleteTheme } from '../../theme';
import { findObjectValue } from '../../utils/helperFunctions';
import Paper from '../Paper';
import { ICardComponentProps, ICardComposition } from './cardComponentProps';
import CardHeader from './card.header.component';
import CardActionArea from './card.actionArea.component';
import CardMedia from './card.media.component';

// eslint-disable-next-line react/display-name
const CardComponent = forwardRef(({ children, customstyles, className, elevation, component, ...props }: ICardComponentProps, ref) => {
  const cssClassStr = `card-component ${className}`;
  return (
    <Paper className={cssClassStr} ref={ref} component={component || 'li'} customstyles={customstyles} elevation={elevation} {...props}>
      {children}
    </Paper>
  );
}) as ICardComposition;

export const Card = styled(CardComponent)`
  --padding-reset: 0;
  --border-radius: ${({ squareCorners }) => (squareCorners ? '0px' : null)};
  ${({ theme }) => {
    const makeSpace = theme && theme.spacing && theme.spacing.space;
    const containerPadding = (makeSpace && makeSpace(2)) || baseTheme.spacing.space(2);
    const elementPadding = (makeSpace && makeSpace(1)) || baseTheme.spacing.space(1);
    return `
      --container-padding: ${containerPadding};
      --element-padding: ${elementPadding};
      & > *:not(img, .card-action-area, .card-media, .card-media-container) {
        padding-left: var(--container-padding);
        padding-right: var(--container-padding);
      }
      & > *:first-child:not(img, .card-action-area) {
        padding-top: var(--container-padding);
      }
      & > *:last-child:not(img) {
        padding-bottom: var(--container-padding);
      }
      & > *:not(:last-child) {
        padding-bottom: ${elementPadding};
      }
      & .card-media-container {
        padding-bottom: 0px;
        margin-bottom: var(--element-padding); //use margin here to prevent underlying img hover scale issues 
      }
    `;
  }}
  & a {
    text-decoration: none;
  }
  & a,
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    color: ${({ theme }: ICardComponentProps) => {
      const txtColor = findObjectValue(theme, 'text', 'primary');
      return txtColor || lightPalleteTheme.text.primary;
    }};
  }
  display: flex;
  flex-direction: column;
  flex: 1;
  ${({ customstyles }) => customstyles}
`;

Card.Header = CardHeader;
Card.ActionArea = CardActionArea;
Card.Media = CardMedia;

export default Card;

CardComponent.displayName = 'CardComponent';
CardComponent.defaultProps = { component: 'li' };
