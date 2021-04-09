export const argTypes = {
  elevation: {
    defaultValue: 5,
    control: { type: 'range', min: 0, max: 24, step: 1 },
  },
  text: {
    description: 'custom prop only available for control panel to test out different text',
    control: 'text',
  },
  squareCorners: {
    defaultValue: false,
    control: 'boolean',
  },
  action: {
    description: 'event function',
    table: {
      category: 'Events',
    },
  },
  component: {
    table: { disable: true },
  },
  customstyles: { control: 'object' },
  theme: { control: 'object' },
  className: {
    table: { disable: true },
  },
  displayName: {
    table: { disable: true },
  },
  hoverStyles: {
    table: { disable: true },
  },
  forwardedAs: {
    table: { disable: true },
  },
};
