import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['filled', 'outlined', 'text', 'elevated', 'tonal'],
      control: 'select'
    },
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } }
  }
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'submit',
  disabled: false,
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  children: 'submit',
  disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  children: 'submit',
  disabled: false,
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  children: 'submit',
  disabled: false,
};

export const Elevated = Template.bind({});
Elevated.args = {
  variant: 'elevated',
  children: 'submit',
  disabled: false,
};

export const Tonal = Template.bind({});
Tonal.args = {
  variant: 'tonal',
  children: 'submit',
  disabled: false,
};