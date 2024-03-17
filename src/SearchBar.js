import React, { useState } from 'react'

export const SearchBar = (props) => {
    const [query, setquery] = useState('java')
    const captureQuery=(event)=>{
            var value=event.target.value
            setquery(value)
    }
    const submitQuery=()=>{
        // console.log("query",query)
        props.queryCollector(query)
    }
  return (
    <div style={{display:'flex',justifyContent:'center',fontFamily:"serif",marginTop:"2vh"}}>
        <input onChange={captureQuery} type="text" style={{border:"2px solid black",width:"55vh"}} />
        <button onClick={submitQuery} style={{backgroundColor:"red",padding:"5px",fontWeight:'bold'}}>Search</button>
    </div>
  )
}
