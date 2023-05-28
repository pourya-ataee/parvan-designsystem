import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SegmentedButton } from "./SegmentedButton";
import { SegmentedButtonProps } from "./SegmentedButton";
import '../styles.css'

interface Id {
    id: string
}
interface SegmentedButtonPropsWithIds extends SegmentedButtonProps, Id { };

export interface GroupSegmentedButtonProps {
    /**
     * Each button properties.
     * For more information check SegmentedButton properties.
     */
    propList: SegmentedButtonPropsWithIds[]
    /**
     * Additional class names.
     */
    className?: string
    /**
     * You can select multiple items together or just have one button active.
     */
    multiple?: boolean
    /**
     * Group segmented button direction.
     */
    dir?: 'rtl' | 'ltr'
    /**
     * If multiple is set to false, you can utilize the default value. 
     * However, if multiple is set to true, you should use the defaultValue for each segmented button property.
     * The default value should correspond to one of the SegmentedButton IDs.
     */
    defaultValue?: string extends GroupSegmentedButtonProps["multiple"] ? undefined : string
}

const GroupSegmentedButtonC = (props: GroupSegmentedButtonProps) => {
    const { propList, className, multiple, dir, defaultValue, ...other } = props;
    const [selected, setSelected] = useState<string | null>(defaultValue !== undefined ? defaultValue : null);
    const [multipleSelect, setMultipleSelect] = useState<string[]>([]);
    
    useEffect(() => {
        if(multiple) {
            const arr: string[] = []
            propList.forEach(e => {
                !!e?.defaultValue && arr.push(e.id)
            })
            setMultipleSelect(arr)
        }
    }, [])

    const handleClick = (id: string) => {
        if(!multiple) {
            setSelected(id);
        } else {
            if(multipleSelect.includes(id)) {
                setMultipleSelect(multipleSelect.filter((e) => {
                    return e !== id;
                }))
            } else {
                setMultipleSelect([...multipleSelect, id]);
            }
        }
    };

    return (
        <div className={`${className} group-segmented-button-container group-segmented-button-dir-${!!dir ? dir : 'ltr'}`} {...other}>
            {propList.map((e, i) => (
                <SegmentedButton key={e.id} {...e} selected={!multiple ? selected === e.id : multipleSelect.includes(e.id)} onClick={() => handleClick(e.id)} />
            ))}
        </div>
    )
}

export const GroupSegmentedButton = styled(GroupSegmentedButtonC)`
    display: flex;
    align-items: center;
    flex-direction: row;
    &.group-segmented-button-dir-ltr {
        direction: ltr;
        .segmented-button:last-child {
            border-radius: 0 100px 100px 0;
        }
        .segmented-button:first-child {
            border-radius: 100px 0 0 100px;
        }
    }
    &.group-segmented-button-dir-rtl {
        direction: rtl;
        .segmented-button:last-child {
            border-radius: 100px 0 0 100px;
        }
        .segmented-button:first-child {
            border-radius: 0 100px 100px 0;
        }
    }
`;