import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button';
import '../styles/components/_button.scss';

export default {
  title: 'Components/MyButton',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  primary: true,
  label: 'small',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'medium',
  size: 'medium'
}
export const Large = Template.bind({});
Large.args = {
  label: 'large',
  size: 'large'
}

export const Default = Template.bind({});
Default.args = {
  label: 'default',
  primary: true
  // size: 'medium'
}