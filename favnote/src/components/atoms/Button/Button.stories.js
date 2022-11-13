import React from 'react';
import Button from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      options: ['hsl(49, 100%, 58%)', 'hsl(196, 83%, 75%)', 'hsl(106, 47%, 64%)'],
      control: { type: 'radio' },
    },
  },
};

const Template = args => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  color: 'hsl(49, 100%, 58%)',
};

export const Secondary = () => <Button secondary>Button</Button>;
