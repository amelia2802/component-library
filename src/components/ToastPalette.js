import React from "react";

const toasts = [
    {backgroundColor: '#ECFDF5', color: '#065F46', icon: '/img/circle.png', header: 'Success',text: 'your work has been saved'},
    {backgroundColor: '#FFFBEB', color: '#B45309', icon: '/img/Exclamation.png', header: 'Warning',text: 'A network error was detected'},
    {backgroundColor: '#EFF6FF', color: '#1C51B9', icon: '/img/Icon.png', header: 'Info',text: 'Please read updated information'},
    {backgroundColor: '#FEF2F2', color: '#B45309', icon: '/img/x.png', header: 'Error',text: 'Please re-save your work again'}
]

export default function ToastPalette({selectToast}) {
    return(
        <div className="color-paletter">
            {toasts.map((toast,index)=>(
                    <div 
                        key={index} 
                        className="color-pick"
                        style={{backgroundColor:toast.backgroundColor,
                                color:toast.color
                        }}
                        onClick= {()=>selectToast(toast)} 
                    
                    >
                        <img src={toast.icon} alt="Circle" />
                        <h2>{toast.header}</h2>
                        <p>{toast.text}</p>
                    </div>
            ))}
        </div>
    )
}