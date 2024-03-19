import React from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  tags: ['autodocs'],
  component: RadioButton,
};

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const Template = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: options,
};

export const Secondary = Template.bind({});
Secondary.args = {
  options: options,
  direction: 'row',
};


