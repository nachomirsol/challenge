import {
    getEnvVariable,
    REACT_APP_API,
} from "services/environmentService";

export const BASE_URL_PATENT_REDIRECT = "https://patents.google.com/patent";
export const BASE_URL_API = getEnvVariable(REACT_APP_API);