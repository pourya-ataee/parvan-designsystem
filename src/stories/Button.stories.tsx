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
    theme: {
      control: 'none'
    },
    as: {
      control: 'none'
    },
    forwardedAs: {
      control: 'none'
    }
  }
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  rounded: true,
  isFullyRounded: true,
  children: 'submit',
  disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  rounded: true,
  isFullyRounded: true,
  children: 'submit',
  disabled: false,
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  rounded: true,
  isFullyRounded: true,
  children: 'submit',
  disabled: false,
};

export const Elevated = Template.bind({});
Elevated.args = {
  variant: 'elevated',
  rounded: true,
  isFullyRounded: true,
  children: 'submit',
  disabled: false,
};

export const Tonal = Template.bind({});
Tonal.args = {
  variant: 'tonal',
  rounded: true,
  isFullyRounded: true,
  children: 'submit',
  disabled: false,
};

// export const Default = () => <Button />;
// export const Primary = () => <Button filled rounded onClick={action('clicked')}>Primary Button</Button>;