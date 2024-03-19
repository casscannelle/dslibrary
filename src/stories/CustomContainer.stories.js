import React from 'react';
import CustomContainer from './CustomContainer';

export default {
  title: 'Components/CustomContainer',
  tags: ['autodocs'],
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
Variation1.args = { 
  children: (
    <>
    <div style={{ background: '#15699e', width: 400, height: 400, margin: 'auto', padding: 20 }}>
      <h1 style={{ color: 'white' }}>Meu Título</h1>
      <p style={{ color: 'white' }}>Meu parágrafo</p>
    </div>
    </>

  ),
};

export const Variation2 = Template.bind({});
Variation2.args = { 
  children: (
    <>
      <h1 style={{ color: 'blue' }}>Meu Título</h1> 
      <p style={{ color: 'blue' }}>Meu parágrafo</p> 
    </>
  ),
};
