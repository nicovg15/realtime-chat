import React from 'react'
import '../css/InfoBar.css'

function InfoBar({room}) {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <h3>Room: {room}</h3>
            </div>        
            <div className="rightInnerContainer">
                <a href="/">Cerrar sesión</a>
            </div>    
        </div>
    )
}

export default InfoBar
