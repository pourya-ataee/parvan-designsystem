import { HTMLAttributes, Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import clsx from "clsx";
import '../styles.css';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    disabled?: boolean
    className?: string
    initialValue?: boolean
    onClick?: () => void
}

interface IValueProps {
    value: boolean
    setValue: Dispatch<SetStateAction<boolean>>
}

export interface SwitchButtonProps extends IProps, Partial<IValueProps> { };

const SwitchButtonC = (props: SwitchButtonProps) => {
    const { value, setValue, initialValue, className, disabled, onClick, ...otherProps } = props
    const [valueC, setValueC] = useState<boolean>(initialValue !== undefined ? initialValue : false);

    const handleClick = () => {
        if(!disabled) {
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
            onClick !== undefined && onClick();
        }
    }

    return (
        <div onClick={handleClick} className={`${className} container-active-${value !== undefined ? !!value : valueC} ${disabled ? 'disabled' : ''}`} {...otherProps}>
            <div className="pd-switch-slider-container">
                <span className={`pd-switch-slider active-${value !== undefined ? !!value : valueC}`}></span>
            </div>
        </div>
    )
}

export const SwitchButton = styled(SwitchButtonC)`
    border: 0;
    outline: none;
    cursor: ${props => clsx([!!props.disabled ? 'default' : 'pointer'])};
    position: relative;
    box-sizing: border-box;
    background: var(--primary-color);
    border-radius: 100px;
    width: 52px;
    height: 32px;
    padding: 2px;
    transition: 0.3s;
    .pd-switch-slider-container {
        position: relative;
        width: 100%;
        height: 100%;
        .pd-switch-slider {
            width: 24px;
            height: 24px;
            background: var(--on-primary-color);
            border-radius: 100px;
            position: absolute;
            top: 50%;
            bottom: 0;
            transition: 0.3s;
            transform: translateY(-50%);
            &.active-true {
                right: 0;
            }
            &.active-false {
                background: var(--outline-color);
                right: calc(100% - 24px);
            }
        }
        &:after,
        &:before {
            content: '';
            position: absolute;
            top: 50%;
            bottom: 0;
            transition: 0.3s;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background: transparent;
            border-radius: 100px;
        }
        &:after {
            right: -8px;
        }
        &:before {
            left: -8px;
        }
    }
    &:hover {
        &.container-active-true { 
            .pd-switch-slider-container {
                &:after {
                    background: var(--primary-color-12);
                }
            }
        }
        &.container-active-false { 
            .pd-switch-slider-container {
                &:before {
                    background: var(--on-surface-color-12);
                }
            }
        }
        .pd-switch-slider {
            &.active-true {
                background: var(--primary-container-color);
            }
            &.active-false {
                background: var(--on-surface-variant-color);
            }
            
        }
    }
    &.container-active-true {
        border: 2px solid var(--primary-color);
    }
    &.container-active-false {
        background: #E6E0E9;
        border: 2px solid var(--outline-color);
    }
    &.disabled {
        &.container-active-false {
            background: white;
            border-color: var(--on-surface-color-12);
            .pd-switch-slider {
                background: var(--on-surface-color);
                opacity: 0.38;
            }
        }
        &.container-active-true {
            background: var(--on-surface-color-12);
            border-color: transparent;
            .pd-switch-slider {
                background: white;
            }
        }
    }
`;