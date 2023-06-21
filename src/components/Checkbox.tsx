import { HTMLAttributes, Dispatch, SetStateAction, useState, MouseEvent } from "react";
import styled from "styled-components";
import clsx from "clsx";
import '../styles.css';

interface IProps extends HTMLAttributes<HTMLInputElement> {
    disabled?: boolean
    className?: string
    initialValue?: boolean
    onClick?: (e: MouseEvent<HTMLInputElement>) => void
    name?: string
}

interface IValueProps {
    value: boolean
    setValue: Dispatch<SetStateAction<boolean>>
}

export interface CheckboxProps extends IProps, Partial<IValueProps> { };

const CheckboxC = (props: CheckboxProps) => {
    const { value, setValue, initialValue, className, disabled, onClick, name, ...otherProps } = props
    const [valueC, setValueC] = useState<boolean>(initialValue !== undefined ? initialValue : false);

    const handleClick = (e: MouseEvent<HTMLInputElement>) => {
        if (!disabled) {
            if (setValue !== undefined) {
                if (value !== undefined) {
                    setValue(!value);
                } else {
                    setValue(!valueC);
                    setValueC(!valueC);
                }
            } else {
                setValueC(!valueC)
            }
            onClick !== undefined && onClick(e);
        }
    }

    return (
        <input disabled={disabled} className={className} name={name} type="checkbox" value={value !== undefined ? (!!value).toString() : valueC.toString()} onClick={handleClick} {...otherProps} />
    )
}

export const Checkbox = styled(CheckboxC)`
    border: 0;
    outline: none;
    cursor: ${props => clsx([!!props.disabled ? 'default' : 'pointer'])};
    position: relative;
    box-sizing: border-box;
    transition: 0.3s;
    width: 18px;
    height: 18px;
    margin: 0;
    border-radius: 4px;
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
    &:hover {
        &:after {
            width: ${props => clsx([!!props.disabled ? '0' : '40px'])};
            height: ${props => clsx([!!props.disabled ? '0' : '40px'])};
        }
    }
    &:checked {
        border-color: ${props => clsx([!!props.disabled ? 'var(--on-surface-color)' : 'var(--primary-color)'])};
        background-image: url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 9.4L0 5.4L1.4 4L4 6.6L10.6 0L12 1.4L4 9.4Z' fill='white'/%3E%3C/svg%3E%0A");
        background-color: ${props => clsx([!!props.disabled ? 'var(--on-surface-color)' : 'var(--primary-color)'])};
        background-repeat: no-repeat;
        background-position: center;
        &:after {
            background: var(--primary-color-12);
        }
    }
`;