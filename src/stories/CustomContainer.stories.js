import React from 'react';
import CustomContainer from './CustomContainer';

export default {
  title: 'Components/CustomContainer',
  component: CustomContainer,
};

const Template = (args) => <CustomContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <h1>Meu Título</h1>
      <p>Meu parágrafo</p>
    </>
  ),
};

export const Variation1 = Template.bind({});
Default.args = {
  children: (
    <>
      <h1>Meu Título</h1>
      <p>Meu parágrafo</p>
    </>
  ),
};
