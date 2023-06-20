import { ReactNode, HTMLAttributes } from "react";
import styled from "styled-components";
import '../styles.css'

export interface IProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * ]f it is not provided with a value, the corresponding list item will not have a button.
     * Be aware that if there is both `leading` and a `button` present simultaneously, the `icon` will not be displayed.
     * By default, it is placed at the beginning of the list, and if the `leading` has a value, it will be placed at the end of the list.
     */
    button?: 'switch' | 'checkbox' | 'radio'
    /**
     * The icon that is placed at the end of the list. It is better to use SVG.
     * If there is both `leading` and a `button` present simultaneously, this will not be displayed.
     */
    icon?: ReactNode
    /**
     * Main title of list item
     */
    title: string
    /**
     * The text above the title.
     */
    overline?: string
    /**
     * The text under the title as description.
     */
    description?: string
}

interface IContentProps {
    /**
     * ]f it is not provided with a value, it will be blank.
     * This will only affect the styles.
     */
    leadingType: 'icon' | 'image' | 'video' | 'profile'
    /**
     * Icon, image or video (visual element) that you want to show near other details
     * If the `leading` has a value, the list button will be placed at the end of the list.
     * Also, if there is both `leading` and a `button` present simultaneously, the `icon` will not be displayed.
     */
    leading: ReactNode
}

export interface ListItemProps extends IProps, Partial<IContentProps> { };

const ListItemC = (props: ListItemProps) => {
    const { button, leadingType, leading, icon, title, overline, description, ...otherProps } = props
    return (
        <div {...otherProps}>
            <div className="leading-section">
                {!!leading ? leading : !!button ? (
                    <div></div>
                ) : null}
            </div>
            <div className="pd-listitem-content">
                {!!overline ? <span className="pd-listitem-overline">{overline}</span> : null}
                <span className="pd-listitem-title">{title}</span>
                {!!description ? <span className="pd-listitem-description">{description}</span> : null}
            </div>
            <div className="trailing-section">
                {!!leading && !!button ? (
                    <div></div>
                ) : icon}
            </div>
        </div>
    )
}

export const ListItem = styled(ListItemC)`

`;