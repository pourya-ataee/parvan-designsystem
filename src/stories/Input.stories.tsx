import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput } from '../components';

export default {
    title: 'TextInput',
    component: TextInput,
    argTypes: {
        variant: {
            options: ['filled', 'outlined'],
            control: 'select'
        },
        icon: { table: { disable: true } },
        onFocus: { table: { disable: true } },
        onBlur: { table: { disable: true } },
        onChange: { table: { disable: true } },
        value: { table: { disable: true } },
        setValue: { table: { disable: true } },
        theme: { table: { disable: true } },
        as: { table: { disable: true } },
        forwardedAs: { table: { disable: true } }
    }
} as ComponentMeta<typeof TextInput>;


const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.76 13.27L20.49 19L19 20.49L13.27 14.76C12.2 15.53 10.91 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3C13.09 3 16 5.91 16 9.5C16 10.91 15.53 12.2 14.76 13.27ZM9.5 5C7.01 5 5 7.01 5 9.5C5 11.99 7.01 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.5 5Z" fill="#49454F" />
        </svg>
    ),
    label: 'input',
    disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.76 13.27L20.49 19L19 20.49L13.27 14.76C12.2 15.53 10.91 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3C13.09 3 16 5.91 16 9.5C16 10.91 15.53 12.2 14.76 13.27ZM9.5 5C7.01 5 5 7.01 5 9.5C5 11.99 7.01 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.5 5Z" fill="#49454F" />
        </svg>
    ),
    variant: 'outlined',
    label: 'input',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.76 13.27L20.49 19L19 20.49L13.27 14.76C12.2 15.53 10.91 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3C13.09 3 16 5.91 16 9.5C16 10.91 15.53 12.2 14.76 13.27ZM9.5 5C7.01 5 5 7.01 5 9.5C5 11.99 7.01 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.5 5Z" fill="#49454F" />
        </svg>
    ),
    label: 'input',
    disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.76 13.27L20.49 19L19 20.49L13.27 14.76C12.2 15.53 10.91 16 9.5 16C5.91 16 3 13.09 3 9.5C3 5.91 5.91 3 9.5 3C13.09 3 16 5.91 16 9.5C16 10.91 15.53 12.2 14.76 13.27ZM9.5 5C7.01 5 5 7.01 5 9.5C5 11.99 7.01 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.5 5Z" fill="#49454F" />
        </svg>
    ),
    disabled: false,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
    disabled: false,
};

export const WithSupportingText = Template.bind({});
WithSupportingText.args = {
    label: 'input',
    disabled: false,
    supportingText: 'supporting text',
};

export const WithError = Template.bind({});
WithError.args = {
    label: 'input',
    disabled: false,
    error: 'error message',
};