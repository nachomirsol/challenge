import React, { useState } from "react";
/** Components */
import { Spinner } from "components/Spinner";
import { VirtualizedList } from "components/VirtualizedList";
import { Modal } from "components/Modal";
/** Containers */
import { Layout } from "containers/Layout";
/** Hooks */
import { useFetchData } from "hooks/useFetchData";
/** Constants */
import { FETCHED, FETCHING, ERROR } from "constants/api";
import { DOCUMENTS_PAGE_TITLE, MODAL_HEADER_INFO, MODAL_BUTTON_CANCEL, MODAL_BODY_INFO } from "constants/texts";
import { BASE_URL_API } from "constants/urls";
/** Styles */
import "./style/documents.scss";

export const Documents = () => {

    const [isModalOpen, setModalIsOpen] = useState(false);

    const url = `${BASE_URL_API}/api/data`;

    const { status, data } = useFetchData(url);

    const showModal = () => {
        return (
            <Modal
                isOpen={isModalOpen}
                modalTitle={MODAL_HEADER_INFO}
                cancelButtonText={MODAL_BUTTON_CANCEL}
                setModalIsOpen={setModalIsOpen}
                handleCancelAction={handleCancelAction}
            >
                <div className="modal">
                    {MODAL_BODY_INFO}
                </div>
            </Modal>
        );
    };

    const handleCancelAction = () => {
        setModalIsOpen(false);
    }

    return  (
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
                                    <VirtualizedList
                                        numItems={data.length}
                                        itemHeight={40}
                                        windowHeight={400}
                                        renderItem={({ index, style }:any) => {
                                            const i = data[index];
                                            return (
                                                <div 
                                                    key={i.name} 
                                                    className="item" 
                                                    style={style} 
                                                    onClick={() => setModalIsOpen(true)}
                                                >
                                                    
                                                    <div className="item-index">
                                                        {index}
                                                    </div>
                                                    <div className="item-name">
                                                        {i.patent_title}
                                                    </div>
                                                </div>
                                            );
                                        }}
                                    />
                                ) 
                            :   <div className="documents__error">{ ERROR }</div>
                        )
                    }
                    {isModalOpen && showModal()}
                </div>
                
            </div>
        </Layout>
    )
}