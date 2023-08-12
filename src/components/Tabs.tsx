import React, { ReactNode, useState, useEffect, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styled from "styled-components";
import "../styles.css";

interface IProps {
	/**
	 * If toggleValue and setToggleValue values are not passed, with this property, you can specify the default value of the button.
	 */
	selectedDefaultValue?: boolean;
	/**
	 * Button text
	 */
	text?: string;
	/**
	 * Please provide the value in SVG format. (You can also use icons from MUI.)
	 */
	icon?: ReactNode;
	/**
	 * Button background color (If implemented, the styles related to hover, focus and active will be disabled)
	 */
	background?: string;
	/**
	 * Button background color when is active (If implemented, the styles related to hover, focus and active will be disabled)
	 */
	activeBackground?: string;
    /**
	 * icon position
	 */
	alignment?: "right" | "top";
	/**
	 * big line in bottom
	 */
	bigLine?: boolean
	/**
	 * Button is disable or not
	 */
	disabled?: boolean;
	/**
	 * Additional class names
	 */
	className?: string;
}

interface IValueProps {
	/**
	 * It only works if toggleable is true.
	 */
	selected: boolean;
	/**
	 * It only works if toggleable is true.
	 */
	setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TabsProps extends IProps, ButtonHTMLAttributes<HTMLButtonElement>, Partial<IValueProps> {}

const TabsC = (props: TabsProps) => {
	const { selected, setSelected, selectedDefaultValue, onClick,alignment,bigLine, className, disabled, text, icon, background, ...buttonProps } = props;

	const [selectedC, setSelectedC] = useState<boolean>(selectedDefaultValue as boolean);
	console.log(selectedC);
	useEffect(() => {
		setSelected !== undefined && selectedDefaultValue !== undefined && setSelected(selectedDefaultValue);
	}, []);

	useEffect(() => {
		if (disabled) {
			setSelected !== undefined ? setSelected(false) : setSelectedC(false);
		}
	}, [disabled]);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!disabled) {
			setSelected !== undefined && selected !== undefined ? setSelected(!selected) : setSelectedC(!selectedC);
		}
		!!onClick && onClick(e);
	};

	return (
		<button
			type="button"
			className={`Tab Tab-${
				disabled ? "disabled" : selected !== undefined ? (selected ? "active" : "inactive") : selectedC ? "active" : "inactive"
			} ${clsx({ "text-with-icon": !!text && !!icon })} ${className}`}
			disabled={disabled}
			onClick={handleClick}
			{...buttonProps}
		>
			
			
			<div className="inner-tab">
				{!!text && (
					<span className="Tabs-text label__large">
						{text}
						{!bigLine && (selected !== undefined ? selected : selectedC)  && alignment !== "right" && (
							<span className="tab-line">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
									<path d="M2 14C2 12.3431 3.34315 11 5 11H19C20.6569 11 22 12.3431 22 14H2Z" fill="#6750A4" />
								</svg>
							</span>
						)}
					</span>
				)}
				{!!icon && alignment && <span className="Tab-icon">{icon}</span>}
				{(selected !== undefined ? selected : selectedC ) && (alignment !=='right') ? <span className="Tab-checked"></span> : null}
			</div>
		</button>
	);
};

export const Tabs = styled(TabsC)`
cursor: pointer;
width: fit-content;
	position:relative;
	
	
	padding: 0px 32px;
	&:after{
		content:'';
		width:0%;
		height:100%;
		position:absolute;
		left:0px;
		top:0%;
		background:${props=>props.bigLine && '#6750A41F'};
		transition:0.4s;
		border-radius:0px 90px 90px 0px;
		z-index:10

	}
	
	
	

	&.Tab-active {
		color: rgba(103, 80, 164, 1);
		
		
		border-bottom:${props=>!!props.bigLine && '2px solid rgb(103, 80, 164);'}
		&:after{
			content:'';
			width:100%;
			height:100%;
			position:absolute;
			left:0px;
			top:0px;
			background:${props=>props.bigLine && '#6750A41F'};
			border-radius:0px;
		}
		
		
	}
	&.Tab-active .inner-tab:after{
		content:'';
		width:100%;
		height:100%;
		position:absolute;
		left:0px;
		top:0px;
		background:${props=>!props.bigLine && '#6750A41F'};
		border-radius:0px;

		
	}
	&.Tab-active span.Tab-icon path {
		fill: rgb(103, 80, 164);
	}
	.inner-tab {
		display:flex;
		
		gap: 8px;
		flex-direction: ${props=>props.alignment==='top'? 'column-reverse' : 'row'};
		align-items: center;
		padding:14px 16px;
		transition:0.4s;
		position:relative;

		&:hover{
			background: ${props=>!props.bigLine && 'var(--m-3-state-layers-light-on-surface-opacity-008, rgba(28, 27, 31, 0.08))'};
		}
		&:after{
			content:'';
			width:0%;
			height:100%;
			position:absolute;
			left:0px;
			top:0%;
			background:${props=>!props.bigLine && '#6750A41F'};
			transition:0.4s;
			border-radius:0px 90px 90px 0px;
			z-index:10
	
		}
	}

	span.Tabs-text {
		font-family: IRANSansFaNum;
		font-size: 14px !important;
		font-style: normal;
		font-weight: 500 !important;
		line-height: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index:11;
	}
	.tab-line{
		position: absolute;
		bottom: 0px;
		display: flex;
	}
	span.Tab-icon {
		display:${props => clsx([props.alignment==='top'||props.alignment==='right' ? 'flex' : 'none'])};
		align-items: center;
		justify-content: center;
	}
    .Tab-active .Tab-icon path {
		fill:rgb(103, 80, 164);
     
    }

	display: flex;
	/* flex-direction: row; */
	align-items: center;
	align-content: center;

	background: white;
	border: none;

	.Tab-checked{
		position:absolute;
	}
`;
