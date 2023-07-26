import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateInput } from '../components';

export default {
    title: 'DateInput',
    component: DateInput,
    argTypes: {
        theme: { table: { disable: true } },
        as: { table: { disable: true } },
        forwardedAs: { table: { disable: true } }
    }
} as ComponentMeta<typeof DateInput>;


const Template: ComponentStory<typeof DateInput> = (args) => <DateInput {...args} />;

export const DayValue = Template.bind({});
DayValue.args = {
  type: 'DayValue',
};

export const DayRange = Template.bind({});
DayRange.args = {
	type: 'DayRange',
};