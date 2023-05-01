import clsx from "clsx";
import styled from "styled-components";
import { globalStyles } from "./globalStyles";

export interface ButtonProps {
    variant?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal'
    textColor?: string
    background?: string
    rounded?: 'min' | 'mid' | 'max'
}

export const Button = styled.button<ButtonProps>`
    background: ${props => clsx(
        { 'var(--primary-color)': (props.variant === 'filled' || !props.variant) && !props.background },
        { '#FFFFFF': (props.variant === 'outlined' || props.variant === 'text') && !props.background },
        { 'var(--surface-color)': (props.variant === 'elevated') && !props.background },
        { 'var(--secondary-container-color)': (props.variant === 'tonal') && !props.background },
        [ !!props.background && props.background ]
    )};
    color: ${props => clsx(
        { 'var(--on-primary-color)': (props.variant === 'filled' || !props.variant) && !props.textColor },
        { 'var(--primary-color)': (props.variant === 'outlined' || props.variant === 'text' || props.variant === 'elevated') && !props.textColor },
        { 'var(--on-secondary-container-color)': (props.variant === 'tonal') && !props.textColor },
        [ !!props.textColor && props.textColor ]
    )};
    box-shadow: ${props => clsx(props.variant === 'elevated' ? '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)' : 'none')};
    border: ${props => clsx(props.variant === 'outlined' ? '1px solid var(--outline-color)' : '0')};
    border-radius: ${props => clsx(props.rounded === 'mid' ? '8px' : props.rounded === 'max' ? '100px' : '4px')};
    padding: ${props => clsx(props.variant === 'text' ? '10px 12px' : '10px 24px')};
    outline: none;
    cursor: pointer;
    font-family: var(--font-iransans);
    font-size: var(--font-size-body-medium);
    line-height: var(--line-height-title-small);
    font-weight: 500;
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s;
    svg {
        margin-left: 8px;
    }
    &:hover {
        background: ${props => clsx(
            { '#735EAB': (props.variant === 'filled' || !props.variant) && !props.background },
            { '#F3F1F8': (props.variant === 'outlined' || props.variant === 'text') && !props.background },
            { '#E8E0F0': (props.variant === 'elevated') && !props.background },
            { '#DDD4ED': (props.variant === 'tonal') && !props.background },
            [ !!props.background && props.background ]
        )};
        box-shadow: ${props => clsx(
            { '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)': props.variant === 'filled' || props.variant === 'tonal' || !props.variant },
            { '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)': props.variant === 'elevated' },
            { 'none': props.variant === 'outlined' || props.variant === 'text' },
        )};
    }
    &:active,
    &:focus {
        background: ${props => clsx(
            { '#7965AF': (props.variant === 'filled' || !props.variant) && !props.background },
            { '#ECEAF4': (props.variant === 'outlined' || props.variant === 'text') && !props.background },
            { '#E6DFEF': (props.variant === 'elevated') && !props.background },
            { '#D0C6DF': (props.variant === 'tonal') && !props.background },
            [ !!props.background && props.background ]
        )};
        box-shadow: ${props => clsx( props.variant === 'elevated' ? '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)' : 'none' )};
        border: ${props => clsx(props.variant === 'outlined' ? '1px solid var(--primary-color)' : '0')};
    }
    &:disabled {
        cursor: default;
        box-shadow: none;
        background: ${props => clsx(
            { '#E3E3E4': (props.variant === 'filled' || props.variant === 'elevated' || props.variant === 'tonal' || !props.variant) && !props.background },
            { '#FFFFFF': (props.variant === 'outlined' || props.variant === 'text') && !props.background },
            [ !!props.background && props.background ]
        )};
        color: ${props => clsx(
            { '#979799': (props.variant === 'filled' || props.variant === 'tonal' || props.variant === 'elevated' || !props.variant) && !props.textColor },
            { '#A9A8AA': (props.variant === 'outlined' || props.variant === 'text') && !props.textColor },
            [ !!props.textColor && props.textColor ]
        )};
        border: ${props => clsx(props.variant === 'outlined' ? '1px solid #E3E3E4' : '0')};
    }
    ${globalStyles}
`;
