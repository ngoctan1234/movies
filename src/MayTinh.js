import { useState } from 'react';

function MayTinh(){
    const [a,setA] = useState(0);
    const [b,setB] = useState(0)
    const [result,setResult] = useState(0)

    const add=()=>{
        setResult(a*1+b*1)
    }
    const minus=()=>{
        setResult(a-b)
    }
    const multiply=()=>{
        setResult(a*b)
    }
    const devide=()=>{
        setResult(a/b)
    }

    return(

        <div>
            <input type='text' placeholder='Nhap so A' value={a} onChange={(e)=>setA(e.target.value)}/>
            <input type='text' placeholder='Nhap so B'value={b} onChange={(e)=>setB(e.target.value)}/>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={devide}>/</button>
            <h1>Ket qua la: {result}</h1>
        </div>
    )
}

export default MayTinh;