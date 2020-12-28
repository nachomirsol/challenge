import React,{ useState } from "react";
/** Libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
/** Components */
import { Modal } from "components/Modal";
/** Types */
import { BasicTableProps } from "./types"; 
/** Constants */
import { MODAL_BODY_MESSAGE, MODAL_HEADER_MESSAGE, MODAL_BUTTON_CONFIRM, MODAL_BUTTON_CANCEL } from "constants/texts";
import { BASE_URL_PATENT_REDIRECT } from "constants/urls";
/** Styles */
import "./style/basicTable.scss";

export const BasicTable = ({ data, tableColumnTitles, onClickTableHeader, onClickTableRow, orderParam, isOrdered, hasActions, objectProperties } : BasicTableProps) => {

    const [isModalOpen, setModalIsOpen] = useState(false);
    const [patentNumber, setPatentNumber] = useState("");

    const redirectToExternalUrl = () => {
        window.open(
            `${BASE_URL_PATENT_REDIRECT}/${patentNumber}`,
            "_blank"
        );
    }

    const openModal = (patent:string) => {
        setModalIsOpen(!isModalOpen);
        setPatentNumber(patent);
    };

    const showModal = () => {
        return (
            <Modal
                isOpen={isModalOpen}
                modalTitle={MODAL_HEADER_MESSAGE}
                confirmationButtonText={MODAL_BUTTON_CONFIRM}
                cancelButtonText={MODAL_BUTTON_CANCEL}
                setModalIsOpen={setModalIsOpen}
                handleConfirmAction={() => redirectToExternalUrl()}
            >
                <div className="modal">
                    {MODAL_BODY_MESSAGE}
                </div>
            </Modal>
        );
    };

    const renderHeader = () => {
        return tableColumnTitles.map((key:string, index: number) => {
           return (
                <th key={index}>
                    <div>{key}</div>
                    <div onClick={() => onClickTableHeader(key)}>
                       {<FontAwesomeIcon icon={orderParam === key && isOrdered ? faSortUp : faSortDown} />} 
                    </div>
                </th>
           );
        });
    };

    const renderBody = () => {
        return (
            data.map((row:any, index:number ) => {
                return (
                    <tr key={index} onClick={() => onClickTableRow(row[objectProperties[0]])}>
                        {
                            tableColumnTitles.map((column, index) => {
                                return <td key={index}>{row[column]}</td>
                            })
                        }
                        {hasActions && (
                            <td onClick={() => openModal(row.patent_number)}>
                                <FontAwesomeIcon
                                    icon={faBook}
                                ></FontAwesomeIcon>
                            </td>
                        )}
                    </tr>
                );
            })
        );
    };

    return (
        <>
            <table className="basicTable">
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>{renderBody()}</tbody>
            </table>
            {isModalOpen && showModal()}
        </>
    );
};
