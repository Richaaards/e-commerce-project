import React from "react";
import { withRouter } from "react-router-dom";
import Directory from "../../components/Directory"
import "./HomePage.style.scss";

const HomePage = () => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    )
}

export default withRouter(HomePage);
