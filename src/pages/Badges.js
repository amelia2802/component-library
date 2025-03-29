import React from "react";
import LinkedIcon from "../components/LinkedIcon";
import ColorPalette from "../components/ColorPalette";

export default function Badges(){
    const [selectedColor,setSelectedColor] = React.useState({
        backgroundColor:'#F3F4F6',
        color:'#000'
    })

    const handleColorSelect = (color) =>{
        setSelectedColor(color)
    }
    return(
        <section className="badges">
            <h1>Badges</h1>
            <section className="types">
                <section className="square">
                    <h2>Square</h2>
                    <div className="badge square" style={selectedColor}>Badge</div>
                </section>
                <div className="divider"></div>
                <section className="pill">
                    <h2>Pill</h2>
                    <div className="badge pill" style={selectedColor}>Badge</div>
                </section>
            </section>
            <LinkedIcon to="/" />
            <ColorPalette selectColor={handleColorSelect} />
        </section>
    )
}