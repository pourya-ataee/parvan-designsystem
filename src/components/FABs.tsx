import { ReactNode } from "react";
import clsx from "clsx";
import styled from "styled-components";
import '../styles.css';

export interface FABsProps {
    /**
     * You must provide a value for this property (it can be svg or img).
     */
    children: ReactNode
    /**
     * Default: surface
     */
    variant?: 'surface' | 'primary' | 'secondary'
    /**
     * Default: medium
     */
    size?: 'small' | 'medium' | 'large'
    /**
     * If the extended property is not passed, only the SVG is displayed. 
     * Otherwise, the text "extended" is also displayed next to the SVG.
     */
    extended?: string
    /**
     * FABs background color (If implemented, the styles related to hover, focus and active will be disabled)
     */
    background?: string
    /**
     * FABs second element background color (you can check it on active)
     */
    activeBackground?: string
    /**
     * Add custom text color
     */
    extendedColor?: string
}



const FABsC = (props: FABsProps) => {
    const { children, extended, ...buttonProps } = props;
    return (
        <button {...buttonProps}>
            {!!extended && <span className="extended label__large">{extended}</span>}
            {children}
        </button>
    )
}

export const FABs = styled(FABsC)`
    .extended {
        margin-right: 12px;
        color: ${props => clsx(
            { 'var(--primary-color)': (props.variant === "surface" || !props.variant) && !props.extendedColor },
            { 'var(--on-primary-container-color)': props.variant === "primary" && !props.extendedColor },
            { 'var(--on-secondary-container-color)': props.variant === "secondary" && !props.extendedColor },
            [ !!props.extendedColor && props.extendedColor ]
        )};
    }
    .label__large {
        font-size: var(--font-size-label-large);
        line-height: var(--line-height-label-large);
        font-weight: 500;
    }
    svg, img {
        position: relative;
        width: 24px
        height: 24px
    }
    background: ${props => clsx(
        { 'var(--primary-color-11)': (props.variant === "surface" || !props.variant) && !props.background },
        { 'var(--primary-container-color)': props.variant === "primary" && !props.background },
        { 'var(--secondary-container-color)': props.variant === "secondary" && !props.background },
        [ !!props.background && props.background ]
    )};
    padding: ${props => clsx(
        { '8px': props.size === "small" },
        { '16px': props.size === "medium" || !props.size },
        { '30px': props.size === "large" },
    )};
    border-radius: ${props => clsx(
        { '12px': props.size === "small" },
        { '16px': props.size === "medium" || !props.size },
        { '28px': props.size === "large" },
    )};
    box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
    outline: none;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    &:before {
        content: '';
        position: absolute;
        z-index: 0;
        border-radius: 50px;
        width: 0;
        height: 0;
        right: -25px;
        bottom: -25px;
        transition: 0.3s;
        background: ${props => clsx(
            { 'var(--primary-color-12)': (props.variant === "surface" || !props.variant) && !props.activeBackground },
            { 'var(--on-primary-container-color-12)': props.variant === "primary" && !props.activeBackground },
            { 'var(--on-secondary-container-color-12)': props.variant === "secondary" && !props.activeBackground },
            [ !!props.activeBackground && props.activeBackground ]
        )};
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
    &:hover {
        &:after {
            background: ${props => clsx(
                { 'var(--primary-color-08)': (props.variant === "surface" || !props.variant) && !props.background },
                { 'var(--on-primary-container-color-08)': props.variant === "primary" && !props.background },
                { 'var(--on-secondary-container-color-08)': props.variant === "secondary" && !props.background },
            )};
        }
        box-shadow: 0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3);
    }
    &:focus {
        &:after {
            background: ${props => clsx(
                { 'var(--primary-color-12)': (props.variant === "surface" || !props.variant) && !props.background },
                { 'var(--on-primary-container-color-12)': props.variant === "primary" && !props.background },
                { 'var(--on-secondary-container-color-12)': props.variant === "secondary" && !props.background },
            )};
        }
        box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
    }
    &:active {
        &:after {
            background: transparent;
        }
        background: ${props => clsx(
            { 'var(--primary-color-11)': (props.variant === "surface" || !props.variant) && !props.background },
            { 'var(--primary-container-color)': props.variant === "primary" && !props.background },
            { 'var(--secondary-container-color)': props.variant === "secondary" && !props.background },
        )};
        box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
        &:before {
            width: ${props => clsx(
                { '56px': props.size === "small" },
                { '65px': props.size === "medium" || !props.size },
                { '79px': props.size === "large" },
            )};
            height: ${props => clsx(
                { '50px': props.size === "small" },
                { '61px': props.size === "medium" || !props.size },
                { '71px': props.size === "large" },
            )};
        }
    }
`;
    