import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideMenu } from '../components';

export default {
    title: 'SideMenu',
    component: SideMenu,
    argTypes: {
        theme: { table: { disable: true } },
        as: { table: { disable: true } },
        forwardedAs: { table: { disable: true } }
    }
} as ComponentMeta<typeof SideMenu>;

// @ts-ignore
const Template: ComponentStory<typeof SideMenu> = (args) => <SideMenu {...args} />;

/* export const RTL = Template.bind({});
RTL.args = {
    dir: 'rtl',
    logo: 'Jaakoo',
    collapseLogo: 'JK',
    username: 'test user',
    menuItems: [
        {
            icon: (
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1802_1878)">
                        <path d="M5.32715 9.2H8.32715V19H5.32715V9.2ZM10.9271 5H13.7271V19H10.9271V5ZM16.5271 13H19.3271V19H16.5271V13Z" fill="#4F4F4F"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1802_1878">
                            <rect width="24" height="24" fill="white" transform="translate(0.327148)"/>
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: 'عنوان',
            id: 'menu-item1',
        }, {
            icon: (
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1802_1878)">
                        <path d="M5.32715 9.2H8.32715V19H5.32715V9.2ZM10.9271 5H13.7271V19H10.9271V5ZM16.5271 13H19.3271V19H16.5271V13Z" fill="#4F4F4F"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1802_1878">
                            <rect width="24" height="24" fill="white" transform="translate(0.327148)"/>
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: 'عنوان',
            id: 'menu-item2',
        }, {
            icon: (
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1802_1878)">
                        <path d="M5.32715 9.2H8.32715V19H5.32715V9.2ZM10.9271 5H13.7271V19H10.9271V5ZM16.5271 13H19.3271V19H16.5271V13Z" fill="#4F4F4F"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1802_1878">
                            <rect width="24" height="24" fill="white" transform="translate(0.327148)"/>
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: 'عنوان',
            id: 'menu-item3',
        },
    ]
};

export const LTR = Template.bind({});
LTR.args = {
    dir: 'ltr',
    logo: 'Jaakoo',
    collapseLogo: 'JK',
    username: 'test user',
    menuItems: [
        {
            icon: (
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1802_1878)">
                        <path d="M5.32715 9.2H8.32715V19H5.32715V9.2ZM10.9271 5H13.7271V19H10.9271V5ZM16.5271 13H19.3271V19H16.5271V13Z" fill="#4F4F4F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1802_1878">
                            <rect width="24" height="24" fill="white" transform="translate(0.327148)" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: 'عنوان',
            id: 'menu-item1',
        }, {
            icon: (
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1802_1878)">
                        <path d="M5.32715 9.2H8.32715V19H5.32715V9.2ZM10.9271 5H13.7271V19H10.9271V5ZM16.5271 13H19.3271V19H16.5271V13Z" fill="#4F4F4F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1802_1878">
                            <rect width="24" height="24" fill="white" transform="translate(0.327148)" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: 'عنوان',
            id: 'menu-item2',
        }, {
            icon: (
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1802_1878)">
                        <path d="M5.32715 9.2H8.32715V19H5.32715V9.2ZM10.9271 5H13.7271V19H10.9271V5ZM16.5271 13H19.3271V19H16.5271V13Z" fill="#4F4F4F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1802_1878">
                            <rect width="24" height="24" fill="white" transform="translate(0.327148)" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: 'عنوان',
            id: 'menu-item3',
        },
    ]
}; */