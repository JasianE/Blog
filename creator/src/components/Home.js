import React, {useState} from 'react'

function Home(props){
    const [password, setPassword] = useState('')

    function handleChange(e){
        setPassword(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(password === 'Esambaldhahaha'){
            props.change()
        } else {
            alert('stupdi')
            setPassword('')
        }
    }

    return(
        <div>
            <h1>Password</h1>
            <input 
            type = 'text'
            value = {password}
            name = 'password'
            onChange = {handleChange}
            />
            <button onClick = {handleSubmit}>Submit</button>
        </div>
    )
}

export default Home