import React,{useEffect, useState} from 'react';
import "./styles.css";

export default function App() {
const [items,setItems]=useState([]);
const fetchData=()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>{return response.json()})
  .then(json=>{setItems(json)})
}
useEffect(()=>{
  fetchData()
},[])
  function compareStrings(a,b){
    a=a.toLowerCase();
    b=b.toLowerCase();
    return(a<b)?-1:(a>b)?1:0;
  }
var asc=items.sort(function(a,b){
  return compareStrings(a.name,b.name);
})
  return (
    <div className="App">
      <h2>Fetching Data</h2>
      {items.map((asc)=>(
        <ol key={asc.id}>
          {asc.name}<br/>
          
        </ol>
      )
      )
      }
    </div>
  );
}
