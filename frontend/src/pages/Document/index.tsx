/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useContext } from "react";
/** Libraries */
import { useHistory } from "react-router-dom";
/** Components */
import { Layout } from "containers/Layout";
import { BasicTable } from "components/BasicTable";
import { Button } from "components/Button";
/** Context  */
import { ChemicalDataContext } from "context/chemicalData/chemicalDataContext";
/** Constants */
import { tableColumnTitlesDocsKeys } from "constants/tableColumnTitles";
import { DOCUMENTS_PAGE_TITLE, GO_BACK_TEXT_BUTTON } from "constants/texts";
/** Styles */
import "./style/document.scss";

export const Document = () => {
    const history = useHistory();

    const chemicalDataContext = useContext(ChemicalDataContext);
    const { chemicalTypeDocs } = chemicalDataContext;

    return(
        <Layout>
            <div className="document">
                <div className="document__title">
                    <h2>{DOCUMENTS_PAGE_TITLE}</h2>
                </div>
                <div className="document__searched">
                    {/* @ts-ignore */}
                    <span>{history.location.state}</span>
                </div>
                <div className="document__content">
                    <BasicTable 
                        data={chemicalTypeDocs} 
                        tableColumnTitles={tableColumnTitlesDocsKeys} 
                        onClickTableHeader={() => ({})}
                        onClickTableRow={() => ({})}
                        hasActions={true}
                        objectProperties={tableColumnTitlesDocsKeys}
                    />
                </div>
                <div className= "document__button">
                    <Button textButton={GO_BACK_TEXT_BUTTON} onClickedButton={() => history.push("/")}/>
                </div>
            </div>
        </Layout>
    )
}