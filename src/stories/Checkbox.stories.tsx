import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../components';

export default {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
        theme: { table: { disable: true } },
        as: { table: { disable: true } },
        forwardedAs: { table: { disable: true } }
    }
} as ComponentMeta<typeof Checkbox>;


const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    disabled: false,
};