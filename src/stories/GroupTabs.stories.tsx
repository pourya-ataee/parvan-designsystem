import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GroupTabs } from "../components/GroupTabs";

export default {
	title: "Tabs/GroupTabs",
	component: GroupTabs,
	argTypes: {
		bigLine: {
			options: [true, false],
			control: "select",
		},
		theme: { table: { disable: true } },
		as: { table: { disable: true } },
		forwardedAs: { table: { disable: true } },
	},
} as ComponentMeta<typeof GroupTabs>;

const Template: ComponentStory<typeof GroupTabs> = (args) => <GroupTabs {...args} />;

export const InGroupTabs = Template.bind({});
InGroupTabs.args = {
	defaultValue: "withIcon",
	propList: [
		{
			id: "withIcon",
			text: "with icon",
			icon: (
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
					<path fillRule="evenodd" clipRule="evenodd" d="M9 4.5L14.25 13.5H3.75L9 4.5Z" fill="#1C1B1F" />
				</svg>
			),
		},
		{
			id: "withoutIcon",
			text: "without icon",
		},
		{
			id: "disabled",
			text: "disabled",

			icon: (
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
					<path fillRule="evenodd" clipRule="evenodd" d="M9 4.5L14.25 13.5H3.75L9 4.5Z" fill="#1C1B1F" />
				</svg>
			),
		},
		{
			id: "justIcon",
			text: "disabled",
			icon: (
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
					<path fillRule="evenodd" clipRule="evenodd" d="M9 4.5L14.25 13.5H3.75L9 4.5Z" fill="#1C1B1F" />
				</svg>
			),
		},
	],
};
