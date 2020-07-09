import { useState } from 'react'

const Foo = ({ x, setX}) => {
    const [y, setY] = useState(x)
    return(
        <>
        <h2>Foo</h2>
        x: {x} y: {y}
        <button onClick={() => setY(7)}>Foo</button>
        <button onClick={() => setX(y)}>Change X!!</button>
        </>
    )
} 
export default Foo