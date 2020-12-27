import React from "react";
/** Components */
import { Spinner } from "components/Spinner";
/** Containers */
import { Layout } from "containers/Layout";
/** Hooks */
import { useFetchData } from "hooks/useFetchData";
/** Constants */
import { FETCHED, FETCHING, ERROR } from "constants/api";
import { DOCUMENTS_PAGE_TITLE } from "constants/texts";
import { BASE_URL_API } from "constants/urls";
/** Styles */
import "./style/documents.scss";

export const Documents = () => {

    const url = `${BASE_URL_API}/api/data`;

    const { status, data } = useFetchData(url);

    return(
        <Layout>
            <div className="documents">
                <div className="documents__title">
                    <h2>{DOCUMENTS_PAGE_TITLE}</h2>
                </div>
                <div className="documents__content">
                    {
                        status === FETCHING 
                        ? <Spinner message={"waiting"} size={"m"} /> 
                        : (
                            status === FETCHED 
                            ?   (
                                    data.map((item:any, index:number) => {
                                        return (
                                            <div className="documents__content-item" key={index}> 
                                                { item.chemical_type }
                                            </div>)
                                    })
                                ) 
                            : <div className="documents__error">{ ERROR }</div>
                        )
                    }
                </div>
                
            </div>
        </Layout>
    )
}