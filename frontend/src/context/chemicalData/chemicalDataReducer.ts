/** Reducer types */
import {
    GET_CHEMICAL_DATA,
    GET_CHEMICAL_DATA_2,
    CLEAR_CHEMICAL_DATA,
    CLEAR_CHEMICAL_DATA_2,
    SET_QUERY,
    FILTER_CHEMICAL_DATA,
    FILTER_CHEMICAL_DATA_2,
    SORT_CHEMICAL_DATA,
    SORT_CHEMICAL_DATA_2,
    GET_CHEMICAL_ELEMENT,
} from "./types";

/** types */
import { ActionReducer, StateReducer } from "./types/index";
/** Utils */
import { dynamicSort } from "utils/functions";

export const chemicalDataReducer = (state:StateReducer, action: ActionReducer) => {
    switch (action.type) {
        case GET_CHEMICAL_DATA:
            return {
                ...state,
                chemicalData: action.payload,
                chemicalDataFiltered: action.payload,
            };
        case GET_CHEMICAL_DATA_2:
            return {
                ...state,
                chemicalData2: action.payload,
                chemicalData2Filtered: action.payload,
            };
        case CLEAR_CHEMICAL_DATA:
            return {
                ...state,
                query: "",
                chemicalData: [],
                chemicalDataFiltered: [],
            };
        case CLEAR_CHEMICAL_DATA_2:
            return {
                ...state,
                query: "",
                chemicalData2: [],
                chemicalData2Filtered: [],
            };
        case SET_QUERY:
            return {
                ...state,
                query: action.payload,
            };
        case FILTER_CHEMICAL_DATA:
            return {
                ...state,
                chemicalDataFiltered: state.chemicalData.filter((dataItem:any) =>
                    dataItem.chemical_type
                        .toLowerCase()
                        .includes(action.payload.toLowerCase())
                ),
            };
        case FILTER_CHEMICAL_DATA_2:
            return {
                ...state,
                chemicalData2Filtered: state.chemicalData2.filter((dataItem:any) =>
                    dataItem.chemical_type
                        .toLowerCase()
                        .includes(action.payload.toLowerCase())
                ),
            };
        case SORT_CHEMICAL_DATA:
            return {
                ...state,
                chemicalDataFiltered: state.chemicalDataFiltered.sort(
                    dynamicSort(action.payload[0], action.payload[1])
                ),
            };
        case SORT_CHEMICAL_DATA_2:
            return {
                ...state,
                chemicalData2Filtered: state.chemicalData2Filtered.sort(
                    dynamicSort(action.payload[0], action.payload[1])
                ),
            };
        case GET_CHEMICAL_ELEMENT:
            return {
                ...state,
                chemicalTypeDocs: action.payload,
            };

        default:
            return state;
    }
};
