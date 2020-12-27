import React from "react";

export type ChemicalData = {
  id: number;
  patent_number: string;
  patent_title: string;
  chemical_type: string;
}

type ContextTypes = {
  query: string;
  chemicalData: ChemicalData[];
  chemicalDataFiltered: ChemicalData[];
  chemicalData2: ChemicalData[];
  chemicalData2Filtered: ChemicalData[];
  chemicalDataElement: null;
  chemicalTypeDocs: ChemicalData[];
  chemicalTypeDocs2: ChemicalData[];
  getChemicalData: (query: string) => void;
  getChemicalData2: (query: string) => void;
  setQueryData: (query: string) => void;
  clearChemicalData: () => void;
  clearChemicalData2: () => void;
  filterChemicalData: (query: string) => void;
  filterChemicalData2: (query :string) => void;
  sortChemicalData: (key: string, order: string) => void;
  sortChemicalData2: (key: string, order: string) => void;
  getAllDocsByChemicalType: (chemicalType: string) => void;
  getAllDocsByChemicalType2: (chemicalType: string) => void;
}

const initialContextValues  = {
  query: "",
  chemicalData: [],
  chemicalDataFiltered: [],
  chemicalData2: [],
  chemicalData2Filtered: [],
  chemicalDataElement: null,
  chemicalTypeDocs: [],
  chemicalTypeDocs2: [],
  getChemicalData: () => ({}),
  getChemicalData2: () => ({}),
  setQueryData: () => ({}),
  clearChemicalData: () => ({}),
  clearChemicalData2: () => ({}),
  filterChemicalData: () => ({}),
  filterChemicalData2: () => ({}),
  sortChemicalData: () => ({}),
  sortChemicalData2: () => ({}),
  getAllDocsByChemicalType: () => ({}),
  getAllDocsByChemicalType2: () => ({}),
}

export const ChemicalDataContext = React.createContext<ContextTypes>(initialContextValues)