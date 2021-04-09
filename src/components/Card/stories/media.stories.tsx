import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import Card from '../Card.component';
import { argTypes } from './configs';
import horiImage1 from '../../../../testResources/horizontal_image_1.jpg';
import horiImage2 from '../../../../testResources/horizontal_image_2.jpg';
import vertiImage1 from '../../../../testResources/vertical_image_1.jpeg';

const MediaContainerStyles = styled.div`
  height: max(20rem, 5vh);
  overflow: hidden;
`;
const hoverStyles = `
  :hover > * > img {
    transform: scale(1.2);
  }
`;

export const media: Story<ComponentProps<typeof Card>> = (args) => (
  <>
    <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '16px', rowGap: '16px' }}>
      <Card {...args}>
        <Card.ActionArea action={() => alert('hello')}>
          <Card.Header subtitle={1}>
            <a href="#">{args.header}</a>
          </Card.Header>
          <Card.Media src={horiImage1} alt="Test one" />
          <p>{args.text}</p>
        </Card.ActionArea>
      </Card>
      <Card {...args}>
        <Card.ActionArea action={() => alert('hello')}>
          <Card.Header subtitle={1}>
            <a href="/">{args.header}</a>
          </Card.Header>
          <Card.Media src={horiImage1} alt="Test one" order={-1} $customstyles={`padding: 16px 16px 0 16px;`} />
          <p>{args.text}</p>
        </Card.ActionArea>
      </Card>
      <Card {...args}>
        <Card.ActionArea action={() => alert('hello')} customstyles={hoverStyles}>
          <Card.Header subtitle={1}>
            <a href="/">Image div with img element inside</a>
          </Card.Header>
          <MediaContainerStyles className="card-media-container">
            <Card.Media src={horiImage1} alt="Test one" />
          </MediaContainerStyles>
          <p>hello world...</p>
        </Card.ActionArea>
      </Card>
      <Card {...args}>
        <Card.ActionArea action={() => alert('hello')} customstyles={hoverStyles}>
          <Card.Header subtitle={1}>
            <a href="/">Image div using background image</a>
          </Card.Header>
          <MediaContainerStyles className="card-media-container">
            <Card.Media src={horiImage1} alt="Test one" />
          </MediaContainerStyles>
          <p>hello world...</p>
        </Card.ActionArea>
      </Card>
    </ul>
  </>
);

media.args = {
  elevation: 5,
  header: 'The Celebrated Jumping Frog of Calaveras County',
  text:
    "In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.",
  customstyles: `
      --media-height: max(10rem, 3vh);
      `,
};

media.argTypes = argTypes;
