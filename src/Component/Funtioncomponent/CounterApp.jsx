import React from 'react'

export const CounterApp = () => {
   /* let count = 0
    let increase = ()=>{
        count++ 
    }*/
     
    let[count,setCount]=React.useState('')
    let increase = ()=>{
        // setCount(parseInt(count++)) //count = count+1
        setCount((prevCount)=>parseInt(prevCount+1))
    }
    let decrease = ()=>{
        if(count>1)
        setCount((prevCount)=>parseInt(prevCount-1))  //count=count-1
        else
        setCount(1) //count=1
    }
    let Reset=()=> setCount(0) //count=''

    let Changesign=()=>{
        count!=0 && setCount((prevCount)=>-prevCount)}
  return (
    <>
         <h1>Counter App</h1>
        <button type="button" className="btn btn-primary me-2" onClick={increase}>Increase</button>
        <button type="button" className="btn btn-primary me-2" onClick={decrease}>Decrease</button>
        <button type="button" className="btn btn-primary me-2" onClick={Changesign}>Change sign</button>
        <button type="button" className="btn btn-primary me-2" onClick={Reset}>Reset</button>
        <h1> Count: {count}</h1>
    </>         
   )
}