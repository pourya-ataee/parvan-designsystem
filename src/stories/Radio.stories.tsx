import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from '../components';

export default {
    title: 'Radio',
    component: Radio,
    argTypes: {
        theme: { table: { disable: true } },
        as: { table: { disable: true } },
        forwardedAs: { table: { disable: true } }
    }
} as ComponentMeta<typeof Radio>;


const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
    disabled: false,
};