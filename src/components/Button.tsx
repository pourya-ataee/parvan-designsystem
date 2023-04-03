import styled from "styled-components";
import clsx from "clsx";

export interface ButtonProps {
    variant?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal'
    rounded?: boolean
    isFullyRounded?: boolean
}

export const Button = styled.button<ButtonProps>`
    background: ${props => clsx(
        { '#6750A4': props.variant === 'filled' || !props.variant },
        { '#FFFFFF': props.variant === 'outlined' || props.variant === 'text' },
        { '#FFFBFE': props.variant === 'elevated' },
        { '#E8DEF8': props.variant === 'tonal' }
    )};
    color: ${props => clsx(
        { '#FFFFFF': props.variant === 'filled' || !props.variant },
        { '#6750A4': props.variant === 'outlined' || props.variant === 'text' || props.variant === 'elevated' },
        { '#1D192B': props.variant === 'tonal' }
    )};
    box-shadow: ${props => clsx(props.variant === 'elevated' ? '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)' : 'none')};
    border: ${props => clsx(props.variant === 'outlined' ? '1px solid #79747E' : '0')};
    border-radius: ${props => clsx(props.rounded ? props.isFullyRounded ? '100px' : '8px' : '4px')};
    padding: ${props => clsx(props.variant === 'text' ? '10px 12px' : '10px 24px')};
    outline: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
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
            { '#735EAB': props.variant === 'filled' || !props.variant },
            { '#F3F1F8': props.variant === 'outlined' || props.variant === 'text' },
            { '#E8E0F0': props.variant === 'elevated' },
            { '#DDD4ED': props.variant === 'tonal' }
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
            { '#7965AF': props.variant === 'filled' || !props.variant },
            { '#ECEAF4': props.variant === 'outlined' || props.variant === 'text' },
            { '#E6DFEF': props.variant === 'elevated' },
            { '#D0C6DF': props.variant === 'tonal' }            
        )};
        box-shadow: ${props => clsx( props.variant === 'elevated' ? '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)' : 'none' )};
        border: ${props => clsx(props.variant === 'outlined' ? '1px solid #6750A4' : '0')};
    }
    &:disabled {
        cursor: default;
        box-shadow: none;
        background: ${props => clsx(
            { '#E3E3E4': props.variant === 'filled' || props.variant === 'elevated' || props.variant === 'tonal' || !props.variant },
            { '#FFFFFF': props.variant === 'outlined' || props.variant === 'text' },
        )};
        color: ${props => clsx(
            { '#979799': props.variant === 'filled' || props.variant === 'tonal' || props.variant === 'elevated' || !props.variant },
            { '#A9A8AA': props.variant === 'outlined' || props.variant === 'text' },
        )};
        border: ${props => clsx(props.variant === 'outlined' ? '1px solid #E3E3E4' : '0')};
    }
`;
