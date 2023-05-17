import { CSSProperties, FocusEvent, ReactNode, useState } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { globalStyles } from "./globalStyles";

export interface TextInputProps {
    id: string
    label?: string
    error?: string
    icon?: ReactNode
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void
    className?: string
}

const TextInputC = (props: TextInputProps) => {
    const { label, error, icon, onFocus, onBlur, className, id, ...inputProps } = props;
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        setIsVisible(true)
        onFocus !== undefined && onFocus(e);
    }
    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        setIsVisible(false)
        onBlur !== undefined && onBlur(e);
    }
    const handleRemoveButton = () => {
        console.log('asdfasdf')
        const inputElement: HTMLInputElement = document.getElementById(id) as HTMLInputElement;
        inputElement.value = '';
    }

    return (
        <div style={inputGroupStyle}>
            {!!label && <label htmlFor="">{label}</label>}
            <span style={inputContainerStyle}>
                {!!icon && <span style={inputIconStyle}>{icon}</span>}
                <input type="text" {...inputProps} className={`${className} remove-icon-${isVisible ? 'visible' : 'invisible'}`} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
                {isVisible && (
                    <span style={removeButtonStyle} id={id} onClick={handleRemoveButton}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 10.59L15.59 7L17 8.41L13.41 12L17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59Z" fill="#49454F" />
                        </svg>
                    </span>
                )}
            </span>
            {!!error && <span className="error">{error}</span>}
        </div>
    )
}

const inputGroupStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
}

const removeButtonStyle: CSSProperties = {
    display: 'flex',
    cursor: 'pointer',
    position: 'absolute',
    zIndex: 1,
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)'
}

const inputContainerStyle: CSSProperties = {
    position: 'relative',
}

const inputIconStyle = {

}

export const TextInput = styled(TextInputC)`
    box-sizing: border-box;
    width: 210px;
    &.remove-icon-visible {
        padding: 8px 12px 8px 40px;
    }
    &.remove-icon-invisible {
        padding: 8px 12px;
    }
    height: 56px;
    direction: rtl;
    ${globalStyles}
`;
