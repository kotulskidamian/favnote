import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary'],
      mapping: {
        primary: 'hsl(49, 100%, 58%)',
        secondary: 'hsl(196, 83%, 75%)',
        tertiary: 'hsl(106, 47%, 64%)',
      },
      control: { type: 'radio' },
    },
  },
};

const Template = args => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  color: 'tertiary',
};

export const Secondary = () => <Button secondary>Button</Button>;
