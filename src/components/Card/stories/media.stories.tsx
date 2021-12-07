import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';
import SentimentSatisfiedRoundedIcon from '@material-ui/icons/SentimentSatisfiedRounded';

import Card from '../Card.component';
import { argTypes } from './configs';
import horiImage1 from '../../../../testResources/horizontal_image_1.jpg';
import horiImage2 from '../../../../testResources/horizontal_image_2.jpg';
import vertiImage1 from '../../../../testResources/vertical_image_1.jpeg';

const ViewStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  & > * {
    flex: 0 30%;
    margin-bottom: 12px;
  }

  & > *:not(:last-child) {
    margin-right: 12px;
  }
`;
const ImageStyles = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  aspect-ratio: 4/3;
  transition: all 0.5s;
`;
const ImageHoverStyles = styled.div`
  order: -1;
  height: max(15rem, 4vh);
  width: calc(100% + 32px);
  margin: 0px -16px 0 -16px;
  max-height: max(15rem, 4vh);
`;
const hoverStyles = `
  overflow: hidden;
  :hover > * > img {
    transform: scale(1.2);
  }
`;
const customHoverStyles = `
  background-image: url(${vertiImage1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  height: 100%;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  :hover {
    background: red;
  }
  && h3, && a {
    font-size: 2rem;
    color: white;
    text-shadow: 1px 1px 1px #333;
  }
`;
const customHeaderStyles = `
  display: flex;
  flex-direction: row;
  & p {
    flex-grow: 4;
    line-height: 1.5em;
  }
  & svg {
    flex-grow: 1;
  }
`;

export const mediaStory: Story<ComponentProps<typeof Card>> = (args) => (
  <ViewStyles>
    <Card {...args} elevation={args.elevation}>
      <Card.ActionArea action={() => alert('hello')} customstyles={hoverStyles}>
        <Card.Header subtitle={1}>
          <a href="/">{args.header}</a>
        </Card.Header>
        <ImageHoverStyles>
          <ImageStyles src={horiImage1} alt="sample card image" />
        </ImageHoverStyles>
        <p>{args.text}</p>
      </Card.ActionArea>
    </Card>
    <Card {...args} elevation={args.elevation}>
      <Card.Header component="div" $customstyles={customHeaderStyles}>
        <SentimentSatisfiedRoundedIcon />
        <p>Happy go lucky cat</p>
      </Card.Header>
      <img
        src={horiImage2}
        alt="sample card image"
        style={{ width: '100%', height: 'max(15rem, 4vh)', objectFit: 'cover', aspectRatio: '4/3' }}
      />
      <p>{args.text}</p>
      <Card.ActionArea>
        <button>Read More</button>
      </Card.ActionArea>
    </Card>
    <Card {...args} elevation={args.elevation}>
      <Card.ActionArea action={() => alert('hello')} customstyles={customHoverStyles}>
        <Card.Header subtitle={1}>
          <a href="/">{args.header}</a>
        </Card.Header>
      </Card.ActionArea>
    </Card>
    <Card {...args} elevation={args.elevation}>
      <Card.ActionArea>
        <Card.Header subtitle={1}>
          <a href="/">{args.header}</a>
        </Card.Header>
        <video
          controls
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            order: -1,
          }}
        >
          <source src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" />
          <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" />
          <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
          <source src="http://techslides.com/demos/sample-videos/small.3gp" type="video/3gp" />
        </video>
        <p>{args.text}</p>
      </Card.ActionArea>
    </Card>
  </ViewStyles>
);

mediaStory.args = {
  elevation: 5,
  squareCorners: false,
  header: 'The Celebrated Jumping Frog of Calaveras County',
  text:
    "In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.",
  customstyles: `
      --media-height: max(10rem, 3vh);
      `,
};

mediaStory.argTypes = argTypes;
