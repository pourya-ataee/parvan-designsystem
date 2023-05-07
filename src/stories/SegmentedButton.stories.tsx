import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SegmentedButton } from '../components';

export default {
    title: 'SegmentedButton',
    component: SegmentedButton,
    argTypes: {
        icon: {
            control: false
        },
        theme: { table: { disable: true } },
        as: { table: { disable: true } },
        forwardedAs: { table: { disable: true } }
    }
} as ComponentMeta<typeof SegmentedButton>;


const Template: ComponentStory<typeof SegmentedButton> = (args) => <SegmentedButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'select',
    disabled: false,
    icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 4.5L14.25 13.5H3.75L9 4.5Z" fill="#1C1B1F" />
        </svg>
    )
};