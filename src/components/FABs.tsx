import React, { ReactNode } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { globalStyles } from "./globalStyles";

export interface FABsProps {
    /**
     * You must provide a value for this property.
     */
    svg: ReactNode

    /**
     * Default: surface
     */
    variant?: 'surface' | 'primary' | 'secondary'

    /**
     * Default: medium
     */
    size?: 'small' | 'large'
    /**
     * If the extended property is not passed, only the SVG is displayed. 
     * Otherwise, the text "extended" is also displayed next to the SVG.
     */
    extended?: string
}



const FABsC = (props: FABsProps) => (
    <button {...props}>
        <span className="extended">{props.extended}</span>
        {props.svg}
    </button>
)

export const FABs = styled(FABsC)`
    .extended {
        background: black;
    }
    padding: ${props => clsx(
        { '8px': props.size === "small" },
        { '30px': props.size === "large" },
        [!props.size && '16px']
    )};
    border-radius: ${props => clsx(
        { '12px': props.size === "small" },
        { '28px': props.size === "large" },
        [!props.size && '16px']
    )};
    outline: none;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    ${globalStyles}
`;
    