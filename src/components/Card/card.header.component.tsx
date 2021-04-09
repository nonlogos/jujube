import React from 'react';
import styled from 'styled-components';
import { ICardHeaderComponentProps, cardHeaderSubtitleType } from './cardComponentProps';
import { typography } from '../../theme';

const CardHeaderComponent: React.FC<ICardHeaderComponentProps> = ({
  children,
  component = 'h3',
  className,
  actionArea,
  ...props
}: ICardHeaderComponentProps) => {
  const Elem = component as keyof JSX.IntrinsicElements;

  const handleClick = (event: React.MouseEvent) => {
    if (actionArea) {
      event.preventDefault();
    }
  };
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Elem className={className} {...props} onClick={handleClick}>
      {children}
    </Elem>
  );
};

const CardHeader = styled(CardHeaderComponent)`
  ${({ theme, subtitle }) => {
    if (subtitle && (Number(subtitle) === 1 || Number(subtitle) === 2)) {
      const subtitleType: cardHeaderSubtitleType = `subtitle${subtitle}` as cardHeaderSubtitleType;
      const subtitleStyles = theme && theme.typography && theme.typography[subtitleType];
      return `
        font-family: ${(subtitleStyles && subtitleStyles.fontFamily) || typography[subtitleType].fontFamily};
        font-weight: ${(subtitleStyles && subtitleStyles.fontWeight) || typography[subtitleType].fontWeight};
        font-size: ${(subtitleStyles && subtitleStyles.fontSize) || typography[subtitleType].fontSize};
        font-stretch: ${(subtitleStyles && subtitleStyles.fontStretch) || typography[subtitleType].fontStretch};
        line-height: ${(subtitleStyles && subtitleStyles.lineHeight) || typography[subtitleType].lineHeight};
        letter-spacing: ${(subtitleStyles && subtitleStyles.letterSpacing) || typography[subtitleType].letterSpacing};
      `;
    }
  }}
  ${({ $customstyles }) => $customstyles}
`;
CardHeader.displayName = 'CardHeader';
export default CardHeader;
