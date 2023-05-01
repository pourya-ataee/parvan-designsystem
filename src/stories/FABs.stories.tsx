import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FABs } from '../components';

export default {
    title: 'FABs',
    component: FABs,
    argTypes: {
        variant: {
            options: ['surface', 'primary', 'secondary'],
            control: 'select'
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: 'select'
        },
        theme: { table: { disable: true } },
        as: { table: { disable: true } },
        forwardedAs: { table: { disable: true } }
    }
} as ComponentMeta<typeof FABs>;


const Template: ComponentStory<typeof FABs> = (args) => <FABs {...args} />;

export const Default = Template.bind({});
Default.args = {
    disabled: false,
    svg: (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.56 0.589883L17.91 1.93988C18.7 2.71988 18.7 3.98988 17.91 4.76988L4.68 17.9999H0.5V13.8199L10.9 3.40988L13.73 0.589883C14.51 -0.190117 15.78 -0.190117 16.56 0.589883ZM2.5 15.9999L3.91 16.0599L13.73 6.22988L12.32 4.81988L2.5 14.6399V15.9999Z" fill="#6750A4" />
        </svg>
    ),
};

export const Surface = Template.bind({});
Surface.args = {
    variant: 'surface',
    svg: (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.56 0.589883L17.91 1.93988C18.7 2.71988 18.7 3.98988 17.91 4.76988L4.68 17.9999H0.5V13.8199L10.9 3.40988L13.73 0.589883C14.51 -0.190117 15.78 -0.190117 16.56 0.589883ZM2.5 15.9999L3.91 16.0599L13.73 6.22988L12.32 4.81988L2.5 14.6399V15.9999Z" fill="#6750A4" />
        </svg>
    ),
};

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    svg: (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.56 0.589883L17.91 1.93988C18.7 2.71988 18.7 3.98988 17.91 4.76988L4.68 17.9999H0.5V13.8199L10.9 3.40988L13.73 0.589883C14.51 -0.190117 15.78 -0.190117 16.56 0.589883ZM2.5 15.9999L3.91 16.0599L13.73 6.22988L12.32 4.81988L2.5 14.6399V15.9999Z" fill="#6750A4" />
        </svg>
    ),
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    svg: (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.56 0.589883L17.91 1.93988C18.7 2.71988 18.7 3.98988 17.91 4.76988L4.68 17.9999H0.5V13.8199L10.9 3.40988L13.73 0.589883C14.51 -0.190117 15.78 -0.190117 16.56 0.589883ZM2.5 15.9999L3.91 16.0599L13.73 6.22988L12.32 4.81988L2.5 14.6399V15.9999Z" fill="#6750A4" />
        </svg>
    ),
};