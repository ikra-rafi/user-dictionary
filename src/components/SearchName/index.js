import React, { useContext } from "react";
import "./style.css";
import DataAreaContext from "../../utils/DataAreaContext";

const SearchName = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="field">
            <label className="label">Enter Employee Name Here:</label>
            <div className= "control">
                <input
                    className="input"
                    type="text"
                    placeholder="Ex. Jose Lawrence "
                    onChange={e => context.handleSearchChange(e)} />
            </div>
        </div>
    );
}
export default SearchName;