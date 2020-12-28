import React, {useContext} from "react";
/** Libraries */
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
/** Components */
import { SidebarItem } from "./components/SidebarItem";
/** Context  */
import { ChemicalDataContext } from "context/chemicalData/chemicalDataContext";
/** Helpers */
import { removeLocalStorage } from "helpers/localStorage";
/** Constants */
import { TEXT_TITLE_SIDEBAR, TEXT_LOGOUT_SIDEBAR } from "constants/texts";
/** Style */
import "./style/sidebar.scss";

export const Sidebar = () => {

    const chemicalDataContext = useContext(ChemicalDataContext);
    const { clearChemicalData } = chemicalDataContext;
    const history = useHistory();

    const logout = () => {
        removeLocalStorage();
        history.push("/login");
    }

    return(
        <div className ="sidebar">
            <div className="sidebar__title" onClick={clearChemicalData}>
                <Link to="/">{ TEXT_TITLE_SIDEBAR }</Link>
            </div>
            <div className="sidebar__list" onClick={clearChemicalData}>
                    <SidebarItem url="/documents" text="Documents"/>
                    <SidebarItem url="/about" text="About"/>
            </div>
            <div className="sidebar__logout" onClick={logout}>
                {TEXT_LOGOUT_SIDEBAR}
            </div>
        </div>
    )
    
}