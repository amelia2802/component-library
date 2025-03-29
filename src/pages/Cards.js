import React from "react";
import LinkedIcon from "../components/LinkedIcon";

export default function Cards(){
    return(
        <section className="cards-page">
            <h1>Cards</h1>
            <section className="card-body">
                <img src={require("../img/brand-icon.png")} alt="upward arrow" />              
                <section className="card-content">
                    <h2>Easy Deployment</h2>
                    <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </section>
            </section>
            <LinkedIcon to="/" />
        </section>
    )
}