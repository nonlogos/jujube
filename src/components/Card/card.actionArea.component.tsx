import React, { useState, Children, cloneElement, isValidElement } from 'react';
import styled from 'styled-components';

import { ICardActionAreaProps, IActionAreaProps } from './cardComponentProps';
import { shadow } from '../../theme';

const ActionAreaStyles = styled.div`
  & > *:not(:last-child) {
    padding-bottom: var(--element-padding);
  }
  & > *:not(.card-media, .card-media-container, img, video, audio, iframe, picture) {
    padding: 0 var(--container-padding);
  }
  & > *:first-child:not(.card-media, .card-media-container img, video, audio, iframe, picture) {
    padding-top: var(--container-padding);
  }
  display: flex;
  flex-direction: column;
  flex: auto;
  box-shadow: ${({ $elevation = 0 }) => shadow[$elevation]};

  ${({ $action, $elevation }: IActionAreaProps) =>
    $action &&
    `
    :hover {
      cursor: pointer;
      box-shadow: ${$elevation && $elevation >= 0 ? shadow[$elevation + 5] : 'inherit'}
    }
  `}
  ${({ $customstyles }: IActionAreaProps) => $customstyles}
`;

const CardActionArea: React.FC<ICardActionAreaProps> = ({ children, action, customstyles, elevation, ...props }: ICardActionAreaProps) => {
  const [mouseDown, setMouseDown] = useState<number>(0);
  const handleMousedown = () => {
    const mouseDownTime = new Date().getTime();
    setMouseDown(mouseDownTime);
  };
  const handleMouseup = () => {
    if (action) {
      const mouseUpTime = new Date().getTime();
      const mouseDownDuration = mouseUpTime - mouseDown;
      if (mouseDownDuration < 200) {
        action();
      }
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      action && action();
    }
  };
  // clone inner react components with the prop of actionArea: true
  const childrenWithProp = Children.map(children, (child) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (isValidElement(child) && child.type && child.type.displayName === 'CardHeader') {
      return cloneElement(child as React.ReactElement<any>, {
        actionArea: true,
        onMouseDown: handleMousedown,
        onMouseUp: handleMouseup,
        onKeyDown: handleKeyDown,
        ...props,
      });
    }
    // if the child is html element, pass down mouseDown and mouseUp handlers
    // to avoid action being fired if user is selecting text
    return cloneElement(child as React.ReactElement<any>, {
      onMouseDown: handleMousedown,
      onMouseUp: handleMouseup,
    });
  });

  return (
    <ActionAreaStyles className="card-action-area" $action={action} $customstyles={customstyles} $elevation={elevation}>
      {childrenWithProp}
    </ActionAreaStyles>
  );
};

CardActionArea.displayName = 'CardActionArea';

export default CardActionArea;
