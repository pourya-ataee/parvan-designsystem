import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GroupSegmentedButton } from '../components';

export default {
    title: 'SegmentedButton/GroupSegmentedButton',
    component: GroupSegmentedButton,
    argTypes: {
        icon: {
            control: false
        },
        theme: { table: { disable: true } },
        as: { table: { disable: true } },
        forwardedAs: { table: { disable: true } }
    }
} as ComponentMeta<typeof GroupSegmentedButton>;


const Template: ComponentStory<typeof GroupSegmentedButton> = (args) => <GroupSegmentedButton {...args} />;

export const ExclusiveSelection = Template.bind({});
ExclusiveSelection.args = {
    propList: [
        {
            id: 'withIcon',
            text: 'with icon',
            disabled: false,
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 4.5L14.25 13.5H3.75L9 4.5Z" fill="#1C1B1F" />
                </svg>
            )
        },
        {
            id: 'withoutIcon',
            text: 'without icon',
            disabled: false,
        },
        {
            id: 'disabled',
            text: 'disabled',
            disabled: true,
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 4.5L14.25 13.5H3.75L9 4.5Z" fill="#1C1B1F" />
                </svg>
            )
        },
        {
            id: 'justIcon',
            disabled: false,
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 4.5L14.25 13.5H3.75L9 4.5Z" fill="#1C1B1F" />
                </svg>
            )
        },
    ]
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
    multiple: true,
    propList: [
        {
            id: 'withIcon',
            text: 'with icon',
            disabled: false,
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 4.5L14.25 13.5H3.75L9 4.5Z" fill="#1C1B1F" />
                </svg>
            )
        },
        {
            id: 'withoutIcon',
            text: 'without icon',
            disabled: false,
        },
        {
            id: 'disabled',
            text: 'disabled',
            disabled: true,
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 4.5L14.25 13.5H3.75L9 4.5Z" fill="#1C1B1F" />
                </svg>
            )
        },
        {
            id: 'justIcon',
            disabled: false,
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 4.5L14.25 13.5H3.75L9 4.5Z" fill="#1C1B1F" />
                </svg>
            )
        },
    ]
};