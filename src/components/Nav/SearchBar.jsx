import React, { useState } from "react";
import classes from './Nav.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  function handleOnSearch(){
    const input = document.getElementById('searchInput');
    input.value = ''
  }

  return (
    
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      
      <input
        type="text"
        id="searchInput"
        placeholder="Ciudad..."
        onChange={e => setCity(e.target.value)}
        className ={classes.input}
        />
        <input type="submit" value="Agregar" className={classes.button} onClick={handleOnSearch}/>  
        
    </form>
  );
}
