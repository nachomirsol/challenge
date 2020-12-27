import React from "react";
/** Libraries */
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
/** Types */
import { SidebarItemProps } from "./types"

export const SidebarItem = ({  url, text }: SidebarItemProps) => {
    const { pathname } = useLocation();
    return(
        <Link to = {url}>
            <div className={`sidebar-list-item${pathname.includes(url) ? "--selected" : ""}`}>{text}</div>
        </Link>
    )
}