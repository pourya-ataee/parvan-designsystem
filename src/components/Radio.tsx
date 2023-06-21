import { HTMLAttributes, Dispatch, SetStateAction, useState, MouseEvent } from "react";
import styled from "styled-components";
import clsx from "clsx";
import '../styles.css';

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
    disabled?: boolean
    className?: string
    onClick?: (e: MouseEvent<HTMLInputElement>) => void
    name?: string
}

const RadioC = (props: RadioProps) => {
    const { className, disabled, onClick, name, ...otherProps } = props

    return (
        <input disabled={disabled} className={className} name={name} type="radio" {...otherProps} />
    )
}

export const Radio = styled(RadioC)`
    border: 0;
    outline: none;
    cursor: ${props => clsx([!!props.disabled ? 'default' : 'pointer'])};
    position: relative;
    box-sizing: border-box;
    transition: 0.3s;
    width: 20px;
    height: 20px;
    margin: 0;
    border-radius: 100px;
    border: 2px solid var(--on-surface-variant-color);
    opacity: ${props => clsx([!!props.disabled ? '0.38' : '1'])};
    vertical-align: middle;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        width: 0;
        height: 0;
        border-radius: 100px;
        background: var(--on-surface-color-08);
        transition: 0.3s;
    } 
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        width: 12px;
        height: 12px;
        border: 2px solid white;
        border-radius: 100px;
        transition: 0.3s;
    }
    &:hover {
        &:after {
            width: ${props => clsx([!!props.disabled ? '0' : '40px'])};
            height: ${props => clsx([!!props.disabled ? '0' : '40px'])};
        }
    }
    &:checked {
        border-color: ${props => clsx([!!props.disabled ? 'var(--on-surface-color)' : 'var(--primary-color)'])};
        background-color: ${props => clsx([!!props.disabled ? 'var(--on-surface-color)' : 'var(--primary-color)'])};
        &:after {
            background: var(--primary-color-12);
        }
    }
`;