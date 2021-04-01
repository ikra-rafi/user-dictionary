import React from "react";
import "./style.css";

function Header() {
    return (
        <section className="hero is-primary is-small">
        <div className="hero-body">
        <div className="container">
            <h1 className="title">Employee Directory</h1>
            <h2 className="subtitle">Click on each heading to filter or use the search box to narrow your results</h2>
        </div></div></section>
    )
}

export default Header;
