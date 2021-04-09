import React from 'react';
import styled from 'styled-components';

import { ICardMediaComponentProps } from './cardComponentProps';

const CardMediaComponent: React.FC<ICardMediaComponentProps> = ({
  children,
  component = 'img',
  className,
  variant,
  src,
  ...props
}: ICardMediaComponentProps) => {
  const compElem = variant && variant === 'background' ? 'div' : component;
  const Elem = compElem as keyof JSX.IntrinsicElements;
  const cssClassStr = `card-media ${className}`;

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Elem className={cssClassStr} {...props} src={src}>
      {children}
    </Elem>
  );
};

const CardMedia = styled(CardMediaComponent)`
  order: ${({ order }) => (order && typeof order === 'number' ? order : 'inherit')};
  height: 100%;
  width: var(--width, 100%);
  object-fit: cover;
  transition: all 0.5s;
  &&& {
    ${({ order }) => {
      if (order && Number(order) === -1) {
        return `
          padding-bottom: 0;
          margin-bottom: calc(var(--element-padding) * -1);
        `;
      }
    }}
    ${({ $customstyles }: ICardMediaComponentProps) => $customstyles};
  }
`;

export default CardMedia;
