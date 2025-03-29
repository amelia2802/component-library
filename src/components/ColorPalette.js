import React from "react";

const colors = [
    {backgroundColor: '#F3F4F6', color: '#000'},
    {backgroundColor: '#FEE2E2', color: '#991B1B'},
    {backgroundColor: '#FEF3C7', color: '#92400E'},
    {backgroundColor: '#D1FAE5', color: '#065F46'},
    {backgroundColor: '#DBEAFE', color: '#1E40AF'},
    {backgroundColor: '#E0E7FF', color: '#3730A3'},
    {backgroundColor: '#EDE9FE', color: '#5B21B6'},
    {backgroundColor: '#FCE7F3', color: '#9D174D'},
]

export default function ColorPalette({selectColor}) {
    return(
        <div className="color-paletter">
            {colors.map((color,index)=>(
                    <div 
                        key={index} 
                        className="color-pick"
                        style={{backgroundColor:color.backgroundColor,
                                color:color.color
                        }}
                        onClick= {()=>selectColor(color)} 
                    
                    >
                    </div>
            ))}
        </div>
    )
}