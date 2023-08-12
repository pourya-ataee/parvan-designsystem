import { useEffect, useState, HTMLAttributes } from "react";
import styled from "styled-components";
import { TabsProps } from "./Tabs";
import "../styles.css";
import { Tabs } from "./Tabs";

interface TabsPropsWithIds extends TabsProps {
	id: string;
}

export interface GroupTabsProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Each button properties.
	 * For more information check SegmentedButton properties.
	 */
	propList: TabsPropsWithIds[];
	/**
	 * Additional class names.
	 */
	className?: string;
	/**
	 * You can select multiple items together or just have one button active.
	 */
	multiple?: boolean;
	/**
	 * Group segmented button direction.
	 */
	dir?: "rtl" | "ltr";
	/**
	 * If multiple is set to false, you can utilize the default value.
	 * However, if multiple is set to true, you should use the defaultValue for each segmented button property.
	 * The default value should correspond to one of the SegmentedButton IDs.
	 */
	defaultValue?: string extends GroupTabsProps["multiple"] ? undefined : string;
}

const GroupTabsC = (props: GroupTabsProps) => {
	const { propList, className, multiple, dir, defaultValue, ...other } = props;
	const [selected, setSelected] = useState<string | null>(defaultValue !== undefined ? defaultValue : null);
	const [multipleSelect, setMultipleSelect] = useState<string[]>([]);

	useEffect(() => {
		if (multiple) {
			const arr: string[] = [];
			propList.forEach((e) => {
				!!e?.defaultValue && arr.push(e.id);
			});
			setMultipleSelect(arr);
		}
	}, []);

	const handleClick = (id: string) => {
		if (!multiple) {
			setSelected(id);
			console.log("fff", selected);
		} else {
			if (multipleSelect.includes(id)) {
				setMultipleSelect(
					multipleSelect.filter((e) => {
						return e !== id;
					})
				);
			} else {
				setMultipleSelect([...multipleSelect, id]);
			}
		}
	};

	return (
		<div className={`${className} group-Tab-container group-Tab-dir-${dir ? dir : "ltr"}`} {...other}>
			{propList.map((e) => (
				<Tabs key={e.id} {...e} selected={!multiple ? selected === e.id : multipleSelect.includes(e.id)} onClick={() => handleClick(e.id)} />
			))}
		</div>
	);
};

export const GroupTabs = styled(GroupTabsC)`
	display: flex;
	align-items: center;
	flex-direction: row;
	&.group-Tab-dir-ltr {
		direction: ltr;
		.Tab:last-child {
			border-radius: 0 100px 100px 0;
		}
		.Tab:first-child {
			border-radius: 100px 0 0 100px;
		}
	}
	&.group-Tab-dir-rtl {
		direction: rtl;
		.Tab {
			direction: ltr;
		}
		.Tab:last-child {
			border-radius: 100px 0 0 100px;
		}
		.Tab:first-child {
			border-radius: 0 100px 100px 0;
		}
	}
`;
