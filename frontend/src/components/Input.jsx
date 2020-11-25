import React from 'react'
import '../css/Input.css'
import SendIcon from '@material-ui/icons/Send';

function Input({message, setMessage, sendMessage}) {
    return (
        <form className="form">
            <input type="text" className="input" value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} placeholder="Escribi un mensaje.." />
            <button className="sendButton" onClick={e => sendMessage(e)}><SendIcon /></button>
        </form>
    )
}

export default Input
