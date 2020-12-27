import React, { useReducer } from "react";
import { ChemicalDataContext } from "./chemicalDataContext";
import { chemicalDataReducer } from "./chemicalDataReducer";
import {
    getChemicalTypes,
    getChemicalTypes2,
    getDocsByChemicalType,
    getDocsByChemicalType2,
} from "services/homePageService";
import {
    GET_CHEMICAL_DATA,
    GET_CHEMICAL_DATA_2,
    CLEAR_CHEMICAL_DATA,
    CLEAR_CHEMICAL_DATA_2,
    SET_QUERY,
    FILTER_CHEMICAL_DATA,
    SORT_CHEMICAL_DATA,
    SORT_CHEMICAL_DATA_2,
    GET_CHEMICAL_ELEMENT,
    FILTER_CHEMICAL_DATA_2,
} from "./types";

type chemicalDataStateProps = {
    children: React.ReactNode
}

export const ChemicalDataState = ({ children }: chemicalDataStateProps) => {
    const initialState = {
        query: "",
        chemicalData: [],
        chemicalDataFiltered: [],
        chemicalData2: [],
        chemicalData2Filtered: [],
        chemicalDataElement: null,
        chemicalTypeDocs: [],
        chemicalTypeDocs2: [],
    };

    const [state, dispatch] = useReducer(chemicalDataReducer, initialState);

    // GET CHEMICAL DATA TABLE 1
    const getChemicalData = async (query: string) => {
        const res = await getChemicalTypes(query);
        dispatch({
            type: GET_CHEMICAL_DATA,
            payload: res,
        });
    };

    // GET CHEMICAL DATA TABLE 2
    const getChemicalData2 = async (query: string) => {
        const res = await getChemicalTypes2(query);
        dispatch({
            type: GET_CHEMICAL_DATA_2,
            payload: res,
        });
    };

    // SET QUERY SEARCH
    const setQueryData = async (query: string) => {
        dispatch({
            type: SET_QUERY,
            payload: query,
        });
    };

    // CLEAR CHEMICAL DATA
    const clearChemicalData = () => {
        dispatch({ type: CLEAR_CHEMICAL_DATA });
    };

    // CLEAR CHEMICAL DATA TABLE 2
    const clearChemicalData2 = () => {
        dispatch({ type: CLEAR_CHEMICAL_DATA_2 });
    };

    // FILTER CHEMICAL DATA TABLE 1
    const filterChemicalData = async (query: string) => {
        dispatch({
            type: FILTER_CHEMICAL_DATA,
            payload: query,
        });
    };

    // FILTER CHEMICAL DATA TABLE 2
    const filterChemicalData2 = async (query: string) => {
        dispatch({
            type: FILTER_CHEMICAL_DATA_2,
            payload: query,
        });
    };

    // SORT CHEMICAL DATA
    const sortChemicalData = async (key: string, order: string) => {
        dispatch({
            type: SORT_CHEMICAL_DATA,
            payload: [key, order],
        });
    };

    // SORT CHEMICAL DATA
    const sortChemicalData2 = async (key: string, order: string) => {
        dispatch({
            type: SORT_CHEMICAL_DATA_2,
            payload: [key, order],
        });
    };

    // GET ALL DOCS BY CHEMICAL TYPE TABLE 1
    const getAllDocsByChemicalType = async (chemicalType: string) => {
        const res = await getDocsByChemicalType(chemicalType);
        dispatch({
            type: GET_CHEMICAL_ELEMENT,
            payload: res,
        });
    };

    // GET ALL DOCS BY CHEMICAL TYPE TABLE 2
    const getAllDocsByChemicalType2 = async (chemicalType: string) => {
        const res = await getDocsByChemicalType2(chemicalType);
        dispatch({
            type: GET_CHEMICAL_ELEMENT,
            payload: res,
        });
    };

    return (
        <ChemicalDataContext.Provider
            value={{
                chemicalData: state.chemicalData,
                chemicalDataFiltered: state.chemicalDataFiltered,
                chemicalData2: state.chemicalData2,
                chemicalData2Filtered: state.chemicalData2Filtered,
                chemicalDataElement: state.chemicalDataElement,
                chemicalTypeDocs: state.chemicalTypeDocs,
                chemicalTypeDocs2: state.chemicalTypeDocs2,
                query: state.query,
                getChemicalData,
                getChemicalData2,
                setQueryData,
                clearChemicalData,
                clearChemicalData2,
                filterChemicalData,
                filterChemicalData2,
                sortChemicalData,
                sortChemicalData2,
                getAllDocsByChemicalType,
                getAllDocsByChemicalType2,
            }}
        >
            {children}
        </ChemicalDataContext.Provider>
    );
};
