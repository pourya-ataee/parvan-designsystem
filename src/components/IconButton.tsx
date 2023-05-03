import React, { ReactNode, useState } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { globalStyles } from "./globalStyles";
import '../styles.css'

interface IProps {
    /**
     * You must provide a value for this property (it can be svg or img).
     */
    children: ReactNode
    /**
     * Default: standard
     */
    variant?: 'standard' | 'filled' | 'tonal' | 'outlined'
    /**
     * IconButton background color (If implemented, the styles related to hover, focus and active will be disabled)
     */
    background?: string
    /**
     * IconButton svg color
     */
    svgColor?: string
    /**
     * Is button toggleable or just clickable
     */
    toggleable?: boolean
    /**
     * If the value of toggleValue becomes true, this svg will be displayed.
     */
    fillSvg?: ReactNode
    /**
     * If toggleValue and setToggleValue values are not passed, with this property, you can specify the default value of the button.
     */
    defaultValue?: boolean;
    /**
     * Additional class names
     */
    className?: string
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IValueProps {
    /**
     * It only works if toggleable is true.
     */
    toggleValue: boolean;
    /**
     * It only works if toggleable is true.
     */
    setToggleValue: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IconButtonProps extends IProps, Partial<IValueProps> {};

const IconButtonC = (props: IconButtonProps) => {
    const { children, fillSvg, toggleable, toggleValue, setToggleValue, className, onClick, defaultValue, ...buttonProps } = props;
    const [toggleValueC, setToggleValueC] = useState<boolean>(defaultValue as boolean);
    const handleClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
        if(toggleable) {
            if (setToggleValue !== undefined && toggleValue !== undefined) {
                setToggleValue(!toggleValue);
            } else {
                setToggleValueC(!toggleValueC);
            }
        }
        !!onClick && onClick(e)
    }

    return (
        <button 
            className={`toggleable--${!!toggleable ? 'true' : 'false'} ${clsx([toggleable ? toggleValue || toggleValueC ? 'toggle-active' : 'toggle-inactive' : null ])} ${className}`}
            onClick={handleClick}
            {...buttonProps}
        >
            {toggleable ? toggleValue || toggleValueC ? !!fillSvg ? fillSvg : children : children : children}
        </button>
    )
}

export const IconButton = styled(IconButtonC)`
    &.toggleable--true.toggle-inactive {
        svg {
            fill: ${props => clsx(
                { 'var(--on-surface-variant-color)': (props.variant === "standard" || props.variant === "outlined" || props.variant === "tonal" || !props.variant) && !props.svgColor },
                { 'var(--primary-color)': props.variant === "filled" && !props.svgColor },
                [!!props.svgColor && props.svgColor]
            )};
        }
        svg * {
            fill: ${props => clsx(
                { 'var(--on-surface-variant-color)': (props.variant === "standard" || props.variant === "outlined" || props.variant === "tonal" || !props.variant) && !props.svgColor },
                { 'var(--primary-color)': props.variant === "filled" && !props.svgColor },
                [!!props.svgColor && props.svgColor]
            )};
        }
        background: ${props => clsx(
            { 'transparent': (props.variant === "standard" || props.variant === "outlined" || !props.variant) && !props.background },
            { 'var(--surface-variant)': (props.variant === "filled" || props.variant === "tonal") && !props.background },
            [ !!props.background && props.background ]
        )};
        &:hover {
            &:after {
                background: ${props => clsx(
                    { 'var(--on-secondary-container-color-08)': (props.variant === "standard" || props.variant === "outlined" || !props.variant) && !props.background },
                    { 'var(--primary-color-08)': props.variant === "filled" && !props.background },
                    { 'var(--on-secondary-container-color-08)': props.variant === "tonal" && !props.background },
                )};
            }
        }
        &:active,
        &:focus {
            &:after {
                background: ${props => clsx(
                    { 'var(--on-surface-color-12)': (props.variant === "standard" || props.variant === "outlined" || !props.variant) && !props.background },
                    { 'var(--primary-color-12)': props.variant === "filled" && !props.background },
                    { 'var(--on-surface-color-12)': props.variant === "tonal" && !props.background },
                )};
            }
        }
    }
    &.toggleable--true.toggle-active {
        svg {
            fill: ${props => clsx(
                { 'var(--primary-color)': (props.variant === "standard" || !props.variant) && !props.svgColor },
                { 'var(--on-primary-color)': (props.variant === "filled" || props.variant === "outlined") && !props.svgColor },
                { 'var(--on-secondary-container-color)': props.variant === "tonal" && !props.svgColor },
                [!!props.svgColor && props.svgColor]
            )};
        }
        svg * {
            fill: ${props => clsx(
                { 'var(--primary-color)': (props.variant === "standard" || !props.variant) && !props.svgColor },
                { 'var(--on-primary-color)': (props.variant === "filled" || props.variant === "outlined") && !props.svgColor },
                { 'var(--on-secondary-container-color)': props.variant === "tonal" && !props.svgColor },
                [!!props.svgColor && props.svgColor]
            )};
        }
        background: ${props => clsx(
            { 'transparent': (props.variant === "standard" || !props.variant) && !props.background },
            { 'var(--primary-color)': props.variant === "filled" && !props.background },
            { 'var(--secondary-container-color)': props.variant === "tonal" && !props.background },
            { 'var(--inverse-surface-color)': props.variant === "outlined" && !props.background },
            [ !!props.background && props.background ]
        )};
        &:hover {
            &:after {
                background: ${props => clsx(
                    { 'var(--primary-color-08)': (props.variant === "standard" || !props.variant) && !props.background },
                    { 'var(--on-primary-color-08)': props.variant === "filled" && !props.background },
                    { 'var(--on-secondary-container-color-08)': props.variant === "tonal" && !props.background },
                    { 'var(--inverse-on-surface-color-08)': props.variant === "outlined" && !props.background },
                )};
            }
        }
        &:active,
        &:focus {
            &:after {
                background: ${props => clsx(
                    { 'var(--primary-color-12)': (props.variant === "standard" || props.variant === "filled" || !props.variant) && !props.background },
                    { 'var(--on-secondary-color-12)': props.variant === "tonal" && !props.background },
                    { 'var(--inverse-on-surface-color-12)': props.variant === "outlined" && !props.background },
                )};
            }
        }
    }
    &.toggleable--false {
        svg {
            fill: ${props => clsx(
                { 'var(--on-surface-variant-color)': (props.variant === "standard" || props.variant === "outlined" || !props.variant) && !props.svgColor },
                { 'var(--on-primary-color)': props.variant === "filled" && !props.svgColor },
                { 'var(--on-secondary-container-color)': props.variant === "tonal" && !props.svgColor },
                [!!props.svgColor && props.svgColor]
            )};
        }
        svg * {
            fill: ${props => clsx(
                { 'var(--on-surface-variant-color)': (props.variant === "standard" || props.variant === "outlined" || !props.variant) && !props.svgColor },
                { 'var(--on-primary-color)': props.variant === "filled" && !props.svgColor },
                { 'var(--on-secondary-container-color)': props.variant === "tonal" && !props.svgColor },
                [ !!props.svgColor && props.svgColor ]
            )};
        }
        background: ${props => clsx(
            { 'transparent': (props.variant === "standard" || props.variant === "outlined" || !props.variant) && !props.background },
            { 'var(--primary-color)': props.variant === "filled" && !props.background },
            { 'var(--secondary-container-color)': props.variant === "tonal" && !props.background },
            [ !!props.background && props.background ]
        )};
        &:hover {
            &:after {
                background: ${props => clsx(
                    { 'var(--on-surface-variant-color-08)': (props.variant === "standard" || props.variant === "outlined" || !props.variant) && !props.background },
                    { 'var(--on-primary-color-08)': props.variant === "filled" && !props.background },
                    { 'var(--on-secondary-container-color-08)': props.variant === "tonal" && !props.background },
                )};
            }
        }
        &:active,
        &:focus {
            &:after {
                background: ${props => clsx(
                    { 'var(--on-surface-variant-color-12)': (props.variant === "standard" || props.variant === "outlined" || !props.variant) && !props.background },
                    { 'var(--on-primary-color-12)': props.variant === "filled" && !props.background },
                    { 'var(--on-secondary-container-color-12)': props.variant === "tonal" && !props.background },
                )};
            }
        }
    }
    svg {
        position: relative;
        width: 24px;
        height: 24px;
    }
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: 0.3s;
    }
    &:disabled {
        cursor: default;
        &:after {
            background: transparent !important;
        }
        background: ${props => clsx(
            { 'transparent': (props.variant === "standard" || props.variant === "outlined" || !props.variant) },
            { 'var(--on-surface-color-12)': props.variant === "filled" || props.variant === "tonal" },
        )} !important;
        border-color: #979799 !important;
        svg {
            fill: #979799 !important;
        }
        svg * {
            fill: #979799 !important;
        }
    }
    padding: 8px;
    border-radius: 100px;
    width: 40px;
    height: 40px;
    outline: none;
    border: ${props => clsx([props.variant === "outlined" ? '1px solid var(--outline-color)' : '0'])};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    ${globalStyles}
`;