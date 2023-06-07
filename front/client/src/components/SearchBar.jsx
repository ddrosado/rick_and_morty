import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  // Declaración del estado "id" utilizando useState
  const [id, setId] = useState("");

  // Definición de la función handleChange utilizando una arrow function
  const handleChange = (event) => {
    // Desestructuración del objeto event para obtener el valor del input
    const { value } = event.target;
    // Actualización del estado "id" utilizando setId
    setId(value);
  }


   return (
      <div className={styles['search-bar']}>
          <input 
          name= "search"
          type='text'
          id="search" 
          onChange={handleChange}
          className={styles['search-input']}/>
         <button onClick={() => props.onSearch(id)} className={styles['search-button']}>Agregar</button> 
      {/* esta en callback para que se ejecute cuando presiono el boton */}
      </div>
   );
}
