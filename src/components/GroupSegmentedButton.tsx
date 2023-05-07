import React from "react";
import styled from "styled-components";
import { globalStyles } from "./globalStyles";
import { SegmentedButton } from "./SegmentedButton";
import { SegmentedButtonProps } from "./SegmentedButton";
import '../styles.css'

interface Id {
    id: string
}
interface SegmentedButtonPropsWithIds extends SegmentedButtonProps, Id { };

export interface GroupSegmentedButtonProps {
    propList: SegmentedButtonPropsWithIds[]
    className?: string
    multiple?: boolean
}

const GroupSegmentedButtonC = (props: GroupSegmentedButtonProps) => {
    const { propList, className, multiple, ...other } = props;

    const handleClick = () => {
        if(!multiple) {
            console.log('slm')
        }
    }
    
    return (
        <div className={`${className} group-segmented-button-container`} {...other} onClick={handleClick}>
            {propList.map((e, i) => (
                <SegmentedButton {...e} key={i} />
            ))}
        </div>
    )
}

export const GroupSegmentedButton = styled(GroupSegmentedButtonC)`
    display: flex;
    align-items: center;
    flex-direction: row;
    .segmented-button:last-child {
        border-radius: 0 100px 100px 0;
    }
    .segmented-button:first-child {
        border-radius: 100px 0 0 100px;
    }
    ${globalStyles}
`;