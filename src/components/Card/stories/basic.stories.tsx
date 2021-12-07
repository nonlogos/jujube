import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import Card from '../Card.component';
import { argTypes } from './configs';

//👇 We create a “template” of how args map to rendering
export const basicUsage: Story<ComponentProps<typeof Card>> = (args) => (
  <ul style={{ display: 'flex', flexDirection: 'row' }}>
    <li>
      <p>hello</p>
    </li>
    <Card elevation={args.elevation} squareCorners={args.squareCorners} customstyles={{ marginRight: '10px' }}>
      <Card.Header subtitle={1}>
        <a href="/">{args.header}</a>
      </Card.Header>
      <p>{args.text}</p>
    </Card>
    <Card squareCorners={args.squareCorners} customstyles={{ border: '1px solid darkgray' }}>
      <Card.ActionArea elevation={args.elevation} action={() => alert('hello')} customstyles={args.hoverStyles}>
        <Card.Header subtitle={1}>
          <a href="/">{args.header}</a>
        </Card.Header>
        <p>{args.text}</p>
      </Card.ActionArea>
    </Card>
  </ul>
);

basicUsage.args = {
  elevation: 5,
  squareCorners: false,
  header: 'The Celebrated Jumping Frog of Calaveras County',
  text:
    "In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.",
  hoverStyles: `
      transition: all 0.25s ease;
      :hover { background: lightgray; }
      `,
};

basicUsage.argTypes = argTypes;
