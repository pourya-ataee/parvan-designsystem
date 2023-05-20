import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GroupSegmentedButton } from '../components';

export default {
    title: 'SegmentedButton/GroupSegmentedButton',
    component: GroupSegmentedButton,
    argTypes: {
        theme: { table: { disable: true } },
        as: { table: { disable: true } },
        forwardedAs: { table: { disable: true } }
    }
} as ComponentMeta<typeof GroupSegmentedButton>;


const Template: ComponentStory<typeof GroupSegmentedButton> = (args) => <GroupSegmentedButton {...args} />;

export const ExclusiveSelection = Template.bind({});
ExclusiveSelection.args = {
    defaultValue: 'withIcon',
    propList: [
        {
            id: 'withIcon',
            text: 'with icon',
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 4.5L14.25 13.5H3.75L9 4.5Z" fill="#1C1B1F" />
                </svg>
            )
        },
        {
            id: 'withoutIcon',
            text: 'without icon',
        },
        {
            id: 'disabled',
            text: 'disabled',
            disabled: true,
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 4.5L14.25 13.5H3.75L9 4.5Z" fill="#1C1B1F" />
                </svg>
            )
        },
        {
            id: 'justIcon',
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
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
            defaultValue: true,
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 4.5L14.25 13.5H3.75L9 4.5Z" fill="#1C1B1F" />
                </svg>
            )
        },
        {
            id: 'withoutIcon',
            text: 'without icon',
        },
        {
            id: 'disabled',
            text: 'disabled',
            disabled: true,
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 4.5L14.25 13.5H3.75L9 4.5Z" fill="#1C1B1F" />
                </svg>
            )
        },
        {
            id: 'justIcon',
            defaultValue: true,
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 4.5L14.25 13.5H3.75L9 4.5Z" fill="#1C1B1F" />
                </svg>
            )
        },
    ]
};