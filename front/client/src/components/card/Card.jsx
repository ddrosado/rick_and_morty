import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div className={styles['flex-container']}>
        <button onClick={() => props.onClose(props.id)} className={styles['round-button']}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2>name: {props.name}</h2>
         </Link>
         <h2>status: {props.status}</h2>
         <h2>species: {props.species}</h2>
         <h2>gender: {props.gender}</h2>
         <h2>origin: {props.origin}</h2>
         <img src={props.image} alt='imagen' className={styles['card-image']}/> 
      </div>
   );
}
