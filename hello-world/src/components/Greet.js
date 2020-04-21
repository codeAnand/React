import React from 'react'

// function Greet() {
//     return <h1>Hello Anand!</h1>
// } 
const Greet = (props) => { 
    console.log(props)

    return (
        <div>
    <h1>Hello {props.name} or {props.heroname}!</h1>
    <h2>{props.children}</h2>
    </div>
    )
}

export default Greet