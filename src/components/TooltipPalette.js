import React from "react";

const lightPalette = [
    {backgroundColor: '#FFFFFF', color: '#6B7280'},
    {backgroundColor: '#E0E7FF', color: '#1E40AF'},
    {backgroundColor: '#FFF3FC', color: '#C7369E'},
    {backgroundColor: '#E7FFF3', color: '#137A2A'}
];

const darkPalette = [
    {backgroundColor: '#262626', color: '#C7C7C7'},
    {backgroundColor: '#1E40AF', color: '#E8EDFF'},
    {backgroundColor: '#A9229B', color: '#FFE9FD'},
    {backgroundColor: '#47AA5D', color: '#E3FFE9'},     
];

export default function TooltipPalette({isLight,selectColor}) {
    const palette = isLight ? lightPalette : darkPalette;


    return(
        <div className="color-paletter">
            {palette.map((color,index)=>(
                    <div 
                        key={index} 
                        className="color-pick"
                        style={{backgroundColor:color.backgroundColor,
                                color:color.color,
                        }}
                        onClick={() => selectColor(color)}
                    >
                    </div>
            ))}
        </div>
    )
}
