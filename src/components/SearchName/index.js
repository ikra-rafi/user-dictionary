import React, { useContext } from "react";
import DataAreaContext from "../../utils/DataAreaContext";

const SearchName = () => {
    const context = useContext(DataAreaContext);

    return (
        <section className="section">
<div className="container">
    
        <div className="field">
        <label className="label ">Enter Employee Name Here</label>
            <div className= "control">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter Employee Name Here"
                    onChange={e => context.handleSearchChange(e)} />
            </div>
        </div>
        </div>
        </section>
    );
}
export default SearchName;