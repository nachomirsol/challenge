export type ChemicalData = {
    id: number;
    patent_number: string;
    patent_title: string;
    chemical_type: string;
  }

export type ActionReducer = {
    type: string;
    payload?: any;
}

export type StateReducer = {
    query: string;
    chemicalData: ChemicalData[];
    chemicalDataFiltered: ChemicalData[];
    chemicalData2: ChemicalData[];
    chemicalData2Filtered: ChemicalData[];
    chemicalTypeDocs: ChemicalData[];
    chemicalTypeDocs2: ChemicalData[];
}