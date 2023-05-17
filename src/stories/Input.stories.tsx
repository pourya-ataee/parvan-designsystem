import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput } from '../components';

export default {
    title: 'TextInput',
    component: TextInput,
    argTypes: {
        variant: {
            options: ['filled', 'outlined', 'text', 'elevated', 'tonal'],
            control: 'select'
        },
        theme: { table: { disable: true } },
        as: { table: { disable: true } },
        forwardedAs: { table: { disable: true } }
    }
} as ComponentMeta<typeof TextInput>;


const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: '123',
    label: 'input',
    disabled: false,
};

export const Filled = Template.bind({});
Filled.args = {
    id: '123',
    label: 'input',
    disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
    id: '123',
    label: 'input',
    disabled: false,
};

export const Text = Template.bind({});
Text.args = {
    id: '123',
    label: 'input',
    disabled: false,
};

export const Elevated = Template.bind({});
Elevated.args = {
    id: '123',
    label: 'input',
    disabled: false,
};

export const Tonal = Template.bind({});
Tonal.args = {
    id: '123',
    label: 'input',
    disabled: false,
};