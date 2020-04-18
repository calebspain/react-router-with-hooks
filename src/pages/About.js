import React from "react";
import { useLocation, useHistory } from "react-router";

export default function About() {
    const location = useLocation();
    const history = useHistory();

    console.log(history);

    const goBackHandle = () => {
        history.goBack();
    };

    return (
        <React.Fragment>
            <div>
                About
            </div>
            <div>
                Location = {location.pathname}
            </div>
            <div>
                From = {location.state.from}
            </div>
            <button onClick={goBackHandle}>Go Back</button>
        </React.Fragment>
    )
}
