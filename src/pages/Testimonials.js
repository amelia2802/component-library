import React from "react";
import LinkedIcon from "../components/LinkedIcon";

export default function Testimonials(){
    return(
        <section className="testimonial-page">
            <h1>Testimonials</h1>
            <section className="brand-page">
                <img src={require("../img/company-logo.png")} alt="company logo" />              
                <section className="brand-content">
                    <p className="quote">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                    <p>May Andersons <span className="text-divider">/</span> <span>Workcation, CTO</span></p>
                </section>
            </section>
            <section className="testimonial">
                <img src={require("../img/ceo.png")} alt="May Andersons" />              
                <section className="testimonial-content">
                    <img src={require("../img/qoute.png")} alt="open qoute" /> 
                    <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</p>
                    <p><strong>May Andersons</strong> Workcation, CTO</p>
                </section>
            </section>
            <LinkedIcon to="/" />
        </section>
    )
}