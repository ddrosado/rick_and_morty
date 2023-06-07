import './App.css';
import Cards from './components/cards/Cards.jsx';
// import characters from './data.js';
import Nav from './components/nav/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import Detail from './components/detail/Detail';
import About from './components/about/About';
import Form from './components/form/Form';
import { useEffect } from 'react';



function App() {


const [characters, setCharacters] = useState([]);

const onSearch = id => {
   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

const onClose = id => {
   setCharacters(characters.filter(character => 
      character.id !== Number(id)
    ))
}

const location = useLocation();
const navigate = useNavigate();

const [access, setAccess] = useState(false); 
const EMAIL = "chajunho@gmail.com";
const PASSWORD = "ventilador123";

function login (userData) {
   if(userData.email === EMAIL && userData.password === PASSWORD){
      setAccess(true);
      navigate("/home");
   }
}


useEffect(() => {
   if (!access) {
     navigate('/');
   }
 }, [access, navigate]);

   return (
      <div className='App'>
         {
            location.pathname !== "/" ?
            <Nav onSearch={onSearch}/> 
            : null
         }
         <Routes>
            <Route path='/home' 
            element={<Cards characters={characters} 
            onClose={onClose}/>}></Route>
            <Route path='/about' 
            element={<About/>}></Route>
            <Route 
            path='/detail/:id' 
            element={<Detail/>}></Route>
            <Route path='/' 
            element={<Form login={login}/>}></Route>
         </Routes>
      </div>
   );
}

export default App;
