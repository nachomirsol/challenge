import React from "react";
/** Types */
import { DocumentCardProps } from "./types";
/** Style */
import "./style/documentCard.scss";

export const DocumentCard = ({ children }: DocumentCardProps) => {
    return(
        <div className="documentCard">
            <div className="documentCard__content">
                {children}
            </div>
        </div>
    )
}