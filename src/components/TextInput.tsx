import { ChangeEvent, FocusEvent, ReactNode, useState, InputHTMLAttributes } from "react";
import clsx from "clsx";
import styled from "styled-components";
import '../styles.css';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * Input style type
     */
    variant?: 'filled' | 'outlined'
    /**
     * Custom input label
     */
    label?: string
    /**
     * Input is disabled or not
     */
    disabled?: boolean
    /**
     * Custom error text
     */
    error?: string
    /**
     * Supporting text under the input
     */
    supportingText?: string
    /**
     * Input icon
     */
    icon?: ReactNode
    /**
     * Input onChange function
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    /**
     * Input onFocus function
     */
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void
    /**
     * Input onBlur function
     */
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void
    /**
     * Container additional classes
     */
    className?: string
    /**
     * Input additional classes
     */
    inputClassName?: string
    /**
     * Input default value
     */
    defaultValue?: string
}

interface IValueProps {
    value: string | ReadonlyArray<string> | number | undefined;
    setValue: React.Dispatch<React.SetStateAction<string | ReadonlyArray<string> | number | undefined>>;
}

export interface TextInputProps extends IProps, Partial<IValueProps> { };

const TextInputC = (props: TextInputProps) => {
    const { variant, label, disabled, error, supportingText, icon, className, inputClassName, defaultValue, value, setValue, onChange, onFocus, onBlur, ...inputProps } = props;
    const [focus, setFocus] = useState<boolean>(false);
    const [valueC, setValueC] = useState<string>(!!defaultValue ? defaultValue : '');
    const [isVisible, setIsVisible] = useState<boolean>((!!defaultValue || !!value) ? true : false);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue !== undefined && value !== undefined ? setValue(e.currentTarget.value) : setValueC(e.currentTarget.value)
        if (e.currentTarget.value === '') {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        onChange !== undefined && onChange(e)
    }
    
    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        setFocus(true);
        onFocus !== undefined && onFocus(e)
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        setFocus(false);
        onBlur !== undefined && onBlur(e)
    }

    const handleRemoveButton = () => {
        setValue !== undefined && value !== undefined ? setValue('') : setValueC('');
        setIsVisible(false);
    }

    return (
        <div className={className}>
            <span className={`parvan-input-container status-${!!disabled ? 'disabled' : !!error ? 'error' : focus ? 'focus' : 'enable'} ${isVisible ? 'has-value' : ''} ${!!error && !!focus ? 'focus-with-error' : ''}`}>
                {!!label && <label className="parvan-label">{label}</label>}
                {!!icon && <span className="input-icon">{icon}</span>}
                <input 
                    type="text"
                    disabled={disabled}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onChange={handleChange}
                    value={value !== undefined && setValue !== undefined ? value : valueC}
                    className={`${!!inputClassName ? inputClassName : ''} remove-icon-${isVisible ? 'visible' : 'invisible'} parvan-input`} 
                    {...inputProps} 
                />
                {!disabled ? !!error ? (
                    <span className="remove-button error">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17V15H13V17H11ZM11 7V13H13V7H11Z" fill="#B3261E" />
                        </svg>
                    </span>
                ) : isVisible && (
                    <span className="remove-button" onClick={handleRemoveButton}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 10.59L15.59 7L17 8.41L13.41 12L17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59Z" fill="#49454F" />
                        </svg>
                    </span>
                ) : null}
            </span>
            {!!supportingText || !!error ? (
                <span className="supporting-text">
                    <span className={!disabled ? !!error ? "error" : "help-text" : 'disabled'}>{!!error && !disabled ? error : supportingText}</span>
                </span>
            ): null}
        </div>
    )
}

export const TextInput = styled(TextInputC)`
    user-select: none;
    box-sizing: border-box;
    direction: rtl;
    width: fit-content;
    display: flex;
    flex-direction: column;
    transition: 0.3s;
    .parvan-input-container {
        position: relative;
        background: ${props => clsx(
            { 'var(--surface-variant-color)': props.variant === "filled" || !props.variant },
            { 'transparent': props.variant === "outlined" },
        )};
        border-radius: ${props => clsx(
            { '4px 4px 0 0': props.variant === "filled" || !props.variant},
            { '4px': props.variant === "outlined" },
        )};
        .input-icon {
            position: absolute;
            z-index: 2;
            top: 50%;
            right: 12px;
            transform: translateY(-50%);
            display: flex;
            transition: 0.3s;
        }
        &:before {
            content: '';
            position: absolute;
            z-index: 2;
            bottom: 0;
            right: 0;
            left: 0;
            display: ${props => clsx(
                { 'block': props.variant === "filled" || !props.variant },
                { 'none !important': props.variant === "outlined" },
            )};
            height: 1px;
            background: var(--on-surface-color);
            transition: 0.3s;
        }
        &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            display: ${props => clsx(
                { 'block': props.variant === "filled" || !props.variant },
                { 'none !important': props.variant === "outlined" },
            )};
            width: 100%;
            height: 100%;
            transition: 0.3s;
            z-index: 0;
        }
        &.status-focus {
            &:after {
                background: var(--surface-variant-color-08);
            }
            &:before {
                height: 2px;
                background: var(--primary-color);
            }
            .parvan-label {
                color: var(--primary-color);
                right: ${props => clsx({ '12px': props.variant === "outlined" })};
                top: ${props => clsx({ '0': props.variant === "outlined" })};
                transform: ${props => clsx({ 'translateY(-50%)': props.variant === "outlined" })};
                z-index: ${props => clsx({ '3': props.variant === "outlined" })};
                padding: ${props => clsx({ '0 4px': props.variant === "outlined" })};
                background: ${props => clsx({ 'white': props.variant === "outlined" })};
                font-size: ${props => clsx({ 'var(--font-size-body-small)': props.variant === "outlined" })};
                line-height: ${props => clsx({ 'var(--line-height-body-small)': props.variant === "outlined" })};
            }
            .parvan-input {
                border: ${props => clsx(
                    { '0': props.variant === "filled" || !props.variant },
                    { '2px solid var(--primary-color)': props.variant === "outlined" },
                )};
            }
        }
        &:hover {
            &:before {
                height: 2px;
                background: var(--primary-color);
            }
            .parvan-label {
                color: var(--primary-color);
            }
            .parvan-input {
                border: ${props => clsx(
                    { '0': props.variant === "filled" || !props.variant },
                    { '2px solid var(--primary-color)': props.variant === "outlined" },
                )};
            }
        }
        &.status-error {
            &:before {
                height: 2px;
                background: var(--error-color) !important;
            }
            .parvan-label {
                color: var(--error-color) !important;
            }
            .parvan-input {
                border: ${props => clsx(
                    { '0': props.variant === "filled" || !props.variant },
                    { '2px solid var(--error-color)': props.variant === "outlined" },
                )};
            }
        }
        &.focus-with-error {
            .parvan-label {
                right: ${props => clsx({ '12px': props.variant === "outlined" })};
                top: ${props => clsx({ '0': props.variant === "outlined" })};
                transform: ${props => clsx({ 'translateY(-50%)': props.variant === "outlined" })};
                z-index: ${props => clsx({ '3': props.variant === "outlined" })};
                padding: ${props => clsx({ '0 4px': props.variant === "outlined" })};
                background: ${props => clsx({ 'white': props.variant === "outlined" })};
                font-size: ${props => clsx({ 'var(--font-size-body-small)': props.variant === "outlined" })};
                line-height: ${props => clsx({ 'var(--line-height-body-small)': props.variant === "outlined" })};
            }
        }
        &.has-value {
            .parvan-label {
                right: ${props => clsx({ '12px': props.variant === "outlined" })};
                top: ${props => clsx({ '0': props.variant === "outlined" })};
                transform: ${props => clsx({ 'translateY(-50%)': props.variant === "outlined" })};
                z-index: ${props => clsx({ '3': props.variant === "outlined" })};
                padding: ${props => clsx({ '0 4px': props.variant === "outlined" })};
                background: ${props => clsx({ 'white': props.variant === "outlined" })};
                font-size: ${props => clsx({ 'var(--font-size-body-small)': props.variant === "outlined" })};
                line-height: ${props => clsx({ 'var(--line-height-body-small)': props.variant === "outlined" })};
            }
        }
        &.status-disabled {
            svg, svg * {
                fill: #A9A8AA !important;
            }
            &:before {
                height: 1px !important;
                background: #A9A8AA !important;
            }
            .parvan-label {
                color: #A9A8AA !important;
            }
            .parvan-input {
                background: ${props => clsx(
                    { '#F6F6F6 !important': props.variant === "filled" || !props.variant },
                    { 'transparent': props.variant === "outlined" },
                )};
                color: #A9A8AA !important;
                border: ${props => clsx(
                    { '0': props.variant === "filled" || !props.variant },
                    { '1px solid #F6F6F6': props.variant === "outlined" },
                )};
            }
        }
    }
    .supporting-text {
        padding: 4px 16px 0;
        .error {
            color: var(--error-color)
        }
    }
    .supporting-text {
        .disabled {
            color: #A9A8AA !important;
        }
    }
    .parvan-label {
        position: absolute;
        z-index: 2;
        right: ${props => clsx(
            { '16px': !props.icon },
            { '48px': !!props.icon },
        )};
        top: ${props => clsx(
            { '8px': props.variant === "filled" || !props.variant },
            { '50%': props.variant === "outlined" },
        )};
        transform: ${props => clsx(
            { 'none': props.variant === "filled" || !props.variant },
            { 'translateY(-50%)': props.variant === "outlined" },
        )};
        font-size: ${props => clsx(
            { 'var(--font-size-body-small)': props.variant === "filled" || !props.variant },
            { 'var(--font-size-body-large)': props.variant === "outlined" },
        )};
        line-height: ${props => clsx(
            { 'var(--line-height-body-small)': props.variant === "filled" || !props.variant },
            { 'var(--line-height-body-large)': props.variant === "outlined" },
        )};
        font-weight: 400;
        color: var(--on-surface-color);
        transition: 0.3s;
    }
    .remove-button {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
        display: flex;
        cursor: pointer;
        transition: 0.3s;
        &.error {
            cursor: default;
        }
    }
    .parvan-input {
        border: ${props => clsx(
            { '0': props.variant === "filled" || !props.variant },
            { '1px solid var(--outline-color)': props.variant === "outlined" },
        )};
        position: relative;
        z-index: ${props => clsx(
            { '1': props.variant === "filled" || !props.variant },
            { '2': props.variant === "outlined" },
        )};
        transition: 0.3s;
        border-radius: ${props => clsx(
            { '4px 4px 0 0': props.variant === "filled" || !props.variant },
            { '4px': props.variant === "outlined" },
        )};
        background: transparent;
        width: 210px;
        height: 56px;
        font-size: var(--font-size-body-large);
        line-height: var(--line-height-body-large);
        font-weight: 400;
        color: var(--on-surface-color);
        padding: ${props => clsx(
            { '8px 16px 8px 48px': !props.icon && props.variant === "outlined" },
            { '24px 48px 8px': !!props.label && !!props.icon && props.variant !== "outlined" },
            { '8px 16px 8px 48px': !props.label && !props.icon && props.variant !== "outlined" },
            { '24px 16px 8px 48px': !!props.label && !props.icon && props.variant !== "outlined" },
            { '8px 48px': (!props.label && !!props.icon && props.variant !== "outlined") || (!!props.icon && props.variant === "outlined") },
        )};
        outline: none;
        box-sizing: border-box;
    }
`;
