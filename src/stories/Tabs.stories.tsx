import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs } from "../components/Tabs";

export default {
	title: "Tabs",
	component: Tabs,
	argTypes: {
		icon: {
			control: false,
		},
		theme: { table: { disable: true } },
		as: { table: { disable: true } },
		forwardedAs: { table: { disable: true } },
	},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
	text: "select",
	disabled: false,
	icon: (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
				fill="#1C1B1F"
			/>
		</svg>
	),
};
