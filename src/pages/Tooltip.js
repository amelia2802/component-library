import React from "react";
import LinkedIcon from "../components/LinkedIcon";
import { MdOutlineInbox } from "react-icons/md";
import useToggle from "../hooks/useToggle";
import TooltipPalette from "../components/TooltipPalette";

export default function Tooltip(){
    const [isLight, toggle] = useToggle(false);

    const [selectedColor, setSelectedColor] = React.useState({
        backgroundColor:'#262626',
        color:'#C7C7C7'
    })

    const handleColorSelect = (color) =>{
        setSelectedColor(color)
    }

    return(
        <section className="cards-page">
            <div className="tooltip-header">
                <h1>Tooltip</h1>
                <button onClick={toggle}>{isLight ? "☀️" : "🌑"}</button>
            </div>
          <section className="tooltip-body" style={selectedColor}>
            <section className="tooltip-header">
                <div className="tooltip-header-icon">
                    <MdOutlineInbox />
                    <h2>Archive notes</h2>
                </div>
                <p>&#10005;</p>
            </section>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
          </section>
          <TooltipPalette isLight={isLight} selectColor={handleColorSelect} />
          <LinkedIcon to="/" />
        </section>
    )
}
