import { useState } from "react"
import validation from "./validation"
import styles from "./Form.module.css" 

export default function Form(props){

const [userData, setUserData] = useState({
email: "",
password: ""
})

const [errors, setErrors] = useState({})

const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({
        ...userData, 
        [name]: value
    });
    setErrors(
        validation({
        ...userData,
        [name]: value
        })
    );
}

const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = userData; // Destructure email and password from userData
    props.login({ email, password }); // Pass email and password to the login function
  };

return(
    <div className="container">
        <form onSubmit = {handleSubmit}>
            <label>Email: </label>
            <input 
            type="text"
            value={userData.email}
            name="email"
            onChange={handleChange}/>
            <p>{errors && errors.email ? errors.email : null}</p>
            <label>Password: </label>
            <input 
            type="password"
            value={userData.password}
            name="password"
            onChange={handleChange}/>
            <p>{errors && errors.password ? errors.password : null}</p>
            <button 
            type="submit">Submit</button>
        </form>
    </div>
)
}