import Foo from './foo'
import { useState } from 'react'

const Bar = () => {
    const [x, setX] = useState(0)
    return (
        <>
        <h2>Bar</h2> 
        x: {x} 
        <input type="string" name="x" onChange={(j) => {setX(j.target.value)}} />
        <button onClick={() => setX(22)}>Click Me!!</button> <br/>
        <Foo x={x} setX={setX}/>
        </>
    )
}
export default Bar