import React, { ReactNode, useState, useEffect } from "react";
import clsx from "clsx";
import styled from "styled-components";
import '../styles.css'

interface IProps {
    /**
     * If toggleValue and setToggleValue values are not passed, with this property, you can specify the default value of the button.
     */
    defaultValue?: boolean
    /**
     * Button text
     */
    text?: string
    /**
     * Please provide the value in SVG format. (You can also use icons from MUI.)
     */
    icon?: ReactNode
    /**
     * Button background color (If implemented, the styles related to hover, focus and active will be disabled)
     */
    background?: string
    /**
     * Button background color when is active (If implemented, the styles related to hover, focus and active will be disabled)
     */
    activeBackground?: string
    /**
     * Button is disable or not
     */
    disabled?: boolean
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
    selected: boolean;
    /**
     * It only works if toggleable is true.
     */
    setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SegmentedButtonProps extends IProps, Partial<IValueProps> { };

const SegmentedButtonC = (props: SegmentedButtonProps) => {
    const { selected, setSelected, defaultValue, onClick, className, disabled, text, icon, background, ...buttonProps } = props;
    const [ selectedC, setSelectedC ] = useState<boolean>(defaultValue as boolean)

    useEffect(() => {
        setSelected !== undefined && defaultValue !== undefined && setSelected(defaultValue);
    }, [])

    useEffect(() => {
        if(disabled) {
            setSelected !== undefined ? setSelected(false) : setSelectedC(false);
        }
    }, [disabled])

    const handleClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
        if(!disabled) {
            setSelected !== undefined && selected !== undefined ? setSelected(!selected) : setSelectedC(!selectedC);
        }
        !!onClick && onClick(e)
    }

    return (
        <button className={`segmented-button segmented-button-${disabled ? 'disabled' : selected !== undefined ? selected ? 'active' : 'inactive' : selectedC ? 'active' : 'inactive' } ${clsx({ 'text-with-icon': !!text && !!icon })} ${className}`} disabled={disabled} onClick={handleClick} {...buttonProps}>
            {!!text && <span className="segmented-button-text label__large">{text}</span>}
            {!!icon && <span className="segmented-button-icon">{icon}</span>}
            {!disabled && (selected !== undefined ? selected : selectedC) ? (
                <span className="segmented-button-checked">
                    <svg height="18" viewBox="0 96 960 960" width="18"><path d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z" /></svg>
                </span>
            ) : null}
        </button>
    )
}

export const SegmentedButton = styled(SegmentedButtonC)`
    &.text-with-icon .segmented-button-text {
        margin-right: 8px;
    }
    .segmented-button-checked {
        margin-left: 8px;
    }
    >span {
        display: flex
    }
    >span>svg {
        width: 18px
        height: 18px
    }
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: 0.3s;
        background: transparent;
    }
    &.segmented-button-active {
        background: ${props => clsx([!!props.activeBackground ? props.activeBackground : 'var(--secondary-container-color)'] )};;
        &:hover {
            &:before {
                background: ${props => clsx([!!props.activeBackground ? 'transparent' : 'var(--on-secondary-container-color-08)'])};
            }
        }
        &:focus,
        &:active {
            &:before {
                background: ${props => clsx([!!props.activeBackground ? 'transparent' : 'var(--on-secondary-container-color-12)'])};
            }
        }
    }
    &.segmented-button-inactive {
        background: ${props => clsx([!!props.background ? props.background : 'transparent'])};
        &:hover {
            &:before {
                background: ${props => clsx([!!props.background ? 'transparent' : 'var(--outline-color-08)'])};
            }
        }
        &:focus,
        &:active {
            &:before {
                background: ${props => clsx([!!props.background ? 'transparent' : 'var(--outline-color-12)'])};
            }
        }
    }
    &:disabled {
        cursor: default;
        background: transparent !important;
        .segmented-button-text {
            color: var(--on-surface-color);
            opacity: 0.38;
        }
        border-color: var(--outline-color-12);
        >span>svg {
            fill: #1C1B1F !important;
            opacity: 0.38;
        }
    }
    min-width: 108px;
    height: 40px;
    padding: 10px 12px;
    outline: none;
    border: 1px solid var(--outline-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    .label__large {
        font-size: var(--font-size-label-large);
        line-height: var(--line-height-label-large);
        font-weight: 500;
    }
`;