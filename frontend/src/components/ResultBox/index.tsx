/* eslint-disable @typescript-eslint/ban-ts-comment */
import React,{ useState, useContext } from "react";
/** Libraries */
import { useHistory } from "react-router-dom";
/** Components */
import { Searchbar } from "components/Searchbar";
import { BasicTable } from "components/BasicTable";
/** Context  */
import { ChemicalDataContext } from "context/chemicalData/chemicalDataContext";
/** Types */
import { resultBoxProps, ChemicalData } from "./types";  
/** Constants */
import { tableColumnTitlesKeys, tableColumnHeaderTitle } from "constants/tableColumnTitles";
import { SEARCHBAR_PLACEHOLDER, CHEMICAL_TYPE_1, CHEMICAL_TYPE_2 } from "constants/texts";
/** Styles */
import "./style/resultBox.scss";

export const ResultBox = ({ title, data, type }: resultBoxProps) => {
    const [localQuery, setLocalQuery] = useState("");
    const [order, setOrder] = useState(false);
    const history = useHistory();

    const chemicalDataContext = useContext(ChemicalDataContext);
    const { filterChemicalData, filterChemicalData2, sortChemicalData, sortChemicalData2, getAllDocsByChemicalType } = chemicalDataContext;

    const handleSort = (key:string) => {
        if(type === CHEMICAL_TYPE_1){
            if(order){
                sortChemicalData(key, "asc");
                setOrder(!order);
            }else{
                sortChemicalData(key, "desc");
                setOrder(!order)
            }
        }
        if(type === CHEMICAL_TYPE_2){
            if(order){
                sortChemicalData2(key, "asc");
                setOrder(!order);
            }else{
                sortChemicalData2(key, "desc");
                setOrder(!order)
            }
        }
    }

    const handleQuerySearch = (text: string) => {
        if(!text){
            setLocalQuery("");
        }
        setLocalQuery(text);
        if(type === CHEMICAL_TYPE_1){
            filterChemicalData(text);
        }
        if(type === CHEMICAL_TYPE_2){
            filterChemicalData2(text)
        }    
    }

    const getLocalChemicalElement = (chemicalType:string) => {
        const local = data.find((elm: ChemicalData) => elm.chemical_type === chemicalType);
            
        if(local && local.chemical_type){
            getAllDocsByChemicalType(local.chemical_type)
            history.push({
                pathname: `/document/${local.chemical_type.replace("/","")}`,
                state: local.chemical_type
            });
        }
    }
    
    return (
        <div className="resultBox">
            <div className="resultBox__title">
                {title}
            </div>
            <div className="resultBox__searchbar">
                <Searchbar 
                    value={localQuery} 
                    placeholder={SEARCHBAR_PLACEHOLDER}
                    onChange={(localQuery: string) => handleQuerySearch(localQuery)}
                    hasKeyPress={false}
                />
            </div>
            <div className="resultBox__table" id="table-result">
                <BasicTable 
                    data={data} 
                    tableColumnTitles={tableColumnTitlesKeys}
                    tableColumnHeaderTitles={tableColumnHeaderTitle}
                    onClickTableHeader={() => handleSort(tableColumnTitlesKeys[0])}
                    onClickTableRow={(chemicalType:string) => getLocalChemicalElement(chemicalType)}
                    order={order}
                    hasActions={false}
                    objectProperties={tableColumnTitlesKeys}
                />
            </div>
        </div>
    )
}
