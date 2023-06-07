export default function validation(input){
    
const error = {};
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexPass = new RegExp("[0-9]");

if(!regexEmail.test(input.email)){
    error.email = "Debe ingresar un email válido";
}
if(input.email === ""){
    error.email = "Ingrese un usuario";
}
if(input.email.length > 35){
    error.email = "Se han sobrepasado la cantidad máxima de caracteres";
}
if(!regexPass.test(input.password)){
    error.password = "Debe contener al menos un número";
}
if(input.password.length < 6 && input.password.length > 10){
    error.password = "Debe contener entre 6 y 10 caracteres"
}
if(input.password === ""){
    error.email = "";
}
return error;
}