import React from "react";
import LinkedIcon from "../components/LinkedIcon";
import ToastPallete from "../components/ToastPalette";

export default function Toast(){
    const [selectedToast,setSelectedToast] = React.useState({
        backgroundColor:'#ECFDF5',
        color:'#047857',
        icon: "/img/circle.png",
        header: 'Success',
        text: 'your work has been saved'
    })

    const handleToastSelect = (toast) =>{
        setSelectedToast(toast)
    }
    return(
        <section className="toast-page">
            <h1>Toast Popups</h1>
            <section className="toast-body" style={{backgroundColor:selectedToast.backgroundColor, color:selectedToast.color}}>
                <div className="toast-header">
                    <img src={selectedToast.icon} alt="Circle" />
                    <h2>{selectedToast.header}</h2>
                </div>
                <p>{selectedToast.text}</p>
            </section>
            <ToastPallete selectToast={handleToastSelect} />
            <LinkedIcon to="/" />
        </section>
    )
}