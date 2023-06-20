import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SwitchButton } from '../components';

export default {
    title: 'SwitchButton',
    component: SwitchButton,
    argTypes: {
        theme: { table: { disable: true } },
        as: { table: { disable: true } },
        forwardedAs: { table: { disable: true } }
    }
} as ComponentMeta<typeof SwitchButton>;


const Template: ComponentStory<typeof SwitchButton> = (args) => <SwitchButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    disabled: false,
};