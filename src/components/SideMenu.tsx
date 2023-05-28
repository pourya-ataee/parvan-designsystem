import React, { ReactNode, useState, useEffect } from "react";
import clsx from "clsx";
import styled from "styled-components";
import '../styles.css'

type menuItem = {
    icon: ReactNode,
    id: string,
    title: string,
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface SideMenuProps {
    /**
     * SideMenu direction
     */
    dir: 'rtl' | 'ltr'
    /**
     * Site logo
     */
    logo?: ReactNode
    /**
     * Logo of the website when the sidebar is closed.
     */
    collapseLogo?: ReactNode
    /**
     * Additional class names
     */
    className?: string
    /**
     * Menu items
     */
    menuItems: menuItem[]
    /**
     * User name
     */
    username?: string
    /**
     * In some projects, where it is necessary to specify the active item separately, you can define a variable called active. 
     * If this option has a variable, the automatic identification of items is no longer done.
     * The value of this variable must necessarily be equal to the id of one of the items.
     */
    active?: string
}



const SideMenuC = (props: SideMenuProps) => {
    const { active, username, className, logo, collapseLogo, dir, menuItems, ...sideMenuProps } = props
    const [collapse, setCollapse] = useState<boolean>(false);
    const [activeC, setActiveC] = useState<string>();

    const handleClick = (event: React.MouseEvent<HTMLDivElement>, item: menuItem) => {
        active === undefined && setActiveC(item.id);
        item.onClick !== undefined && item.onClick(event);
    }

    useEffect(() => {
        setActiveC(active);
    }, [active])

    return (
        <div dir={dir} className={`${className} ${collapse ? 'collapsed' : ''}`} {...sideMenuProps}>
            {!!logo || !!collapseLogo ? (
                <>
                    <div className="side-menu-logo">
                        {!!logo && (
                            <div className="logo">
                                {logo}
                            </div>
                        )}
                        {collapseLogo && (
                            <div className="collapse-logo">
                                {collapseLogo}
                            </div>
                        )}
                    </div>
                    <div className="menu-items">
                        {!!username ? (
                            <div className="menu-item username">
                                <span className="menu-item-icon">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.3271 2C6.80715 2 2.32715 6.48 2.32715 12C2.32715 17.52 6.80715 22 12.3271 22C17.8471 22 22.3271 17.52 22.3271 12C22.3271 6.48 17.8471 2 12.3271 2ZM7.67715 18.5C8.98715 17.56 10.5871 17 12.3271 17C14.0671 17 15.6671 17.56 16.9771 18.5C15.6671 19.44 14.0671 20 12.3271 20C10.5871 20 8.98715 19.44 7.67715 18.5ZM18.4671 17.12C16.7771 15.8 14.6471 15 12.3271 15C10.0071 15 7.87715 15.8 6.18715 17.12C5.02715 15.73 4.32715 13.95 4.32715 12C4.32715 7.58 7.90715 4 12.3271 4C16.7471 4 20.3271 7.58 20.3271 12C20.3271 13.95 19.6271 15.73 18.4671 17.12Z" fill="#828282" />
                                        <path d="M12.3271 6C10.3971 6 8.82715 7.57 8.82715 9.5C8.82715 11.43 10.3971 13 12.3271 13C14.2571 13 15.8271 11.43 15.8271 9.5C15.8271 7.57 14.2571 6 12.3271 6ZM12.3271 11C11.4971 11 10.8271 10.33 10.8271 9.5C10.8271 8.67 11.4971 8 12.3271 8C13.1571 8 13.8271 8.67 13.8271 9.5C13.8271 10.33 13.1571 11 12.3271 11Z" fill="#828282" />
                                    </svg>
                                </span>
                                <span className="menu-item-title">
                                    {username}
                                </span>
                            </div>
                        ) : null}
                        {menuItems.map((e, i) => (
                            <div onClick={(event) => handleClick(event, e)} className={`menu-item ${activeC === e.id ? 'active' : ''}`} key={`${e.id}${i}`}>
                                <span className="menu-item-icon">
                                    {e.icon}
                                </span>
                                <span className="menu-item-title">
                                    {e.title}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="collapse-button" onClick={() => setCollapse(!collapse)}>
                        <span className="collapse-button-icon">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1802_1764)">
                                    <path d="M8.91715 16.59L10.3271 18L16.3271 12L10.3271 6L8.91715 7.41L13.4971 12L8.91715 16.59Z" fill="#333333" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1802_1764">
                                        <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24.3271 24)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span className="collapse-text">بستن منو</span>
                    </div>
                </>
            ): null}
        </div>
    )
}

export const SideMenu = styled(SideMenuC)`
    box-sizing: border-box;
    position: sticky;
    top: 0;
    width: 220px;
    user-select: none;
    background: white;
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    height: 100dvh;
    height: 100vh;
    .collapse-logo {
        display: none;
    }
    .side-menu-logo {
        margin-bottom: 24px;
        padding: 0 20px;
        text-align: center;
        font-weight: 400;
        font-size: var(--font-size-headline-medium);
        line-height: var(--line-height-display-large);
    }
    .collapse-button {
        cursor: pointer;
        padding: 32px 20px 8px;
        font-weight: 400;
        display: flex;
        align-items: center;
        font-size: var(--font-size-body-large);
        .collapse-button-icon {
            background: var(--primary-container-color);
            border-radius: 8px;
            display: inline-flex;
            padding: 8px;
            svg {
                transform: ${props => clsx(
                    { 'rotate(0deg)': props.dir === 'rtl' || !props.dir },
                    { 'rotate(180deg)': props.dir === 'ltr' }
                )};
            }
        }
        .collapse-text {
            margin-right: ${props => clsx({'8px': props.dir === 'rtl' || !props.dir})};
            margin-left: ${props => clsx({'8px': props.dir === 'ltr'})};
        }
    }
    .menu-items {
        padding: 0 20px;
        overflow: hidden;
        flex-grow: 1;
        &::-webkit-scrollbar {
            width: 6px;
        }
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        &::-webkit-scrollbar-thumb {
            background: #888;
        }
        &::-webkit-scrollbar-thumb:hover {
            ackground: #555;
        }
        .menu-item {
            gap: 8px;
            padding: 8px;
            display: flex;
            cursor: pointer;
            font-weight: 400;
            align-items: center;
            margin-bottom: 16px;
            border-radius: 8px;
            font-size: var(--font-size-body-large);
            &.username {
                color: #828282;
                cursor: default;
            }
            .menu-item-icon {
                display: inline-flex;
                max-width: 24px;
            }
            &.active {
                background: var(--primary-color);
                color: white;
                font-weight: 500;
                svg, path {
                    fill: white;
                }
            }
        }
    }
    .menu-items:hover {
        overflow-y: auto;
    }
    &.collapsed {
        width: 80px;
        .side-menu-logo .logo {
            display: none;
        }
        .side-menu-logo .collapse-logo {
            display: block;
        }
        .collapse-text {
            display: none;
        }
        .collapse-button-icon svg {
            transform: ${props => clsx(
                { 'rotate(180deg)': props.dir === 'rtl' || !props.dir },
                { 'rotate(0deg)': props.dir === 'ltr' }
            )};
        }
        .menu-item-title {
            display: none;
        }
        .menu-item, .collapse-button {
            justify-content: center;
        }
    }
`;
    