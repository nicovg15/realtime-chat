import React, {useState} from 'react'
import '../css/Join.css'
import {useHistory} from 'react-router-dom'

function Join() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [error, setError] = useState(false)
    const history = useHistory()

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(name.length < 3 || room.length < 1){
            return setError(true)
        }else {
            history.push(`/chat?name=${name}&room=${room}`)
            setError(false)
        }
        
    }

    return (
        <div className="join">
            <div className="join-container">
                <h1 className="join-title">Realtime Chat</h1>
                <form onSubmit={handleOnSubmit}>
                    <input type="text" className="join-input" placeholder="Nombre" onChange={e => setName(e.target.value)}/>
                    <input type="text" className="join-input" placeholder="Room" onChange={e => setRoom(e.target.value)}/>
                    <button className="join-button" type="submit">INGRESAR</button>
                </form>
                {error ? <p className="join-error">Nombre debe tener más de tres letras y/o debes seleccionar un room</p> : ''}
            </div>
        </div>
    )
}

export default Join
