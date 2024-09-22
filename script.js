const firebaseConfig = {
    apiKey: "AIzaSyAT0WBz3GjZDFarHVM70IgU61Jaz7N5zMU",
    authDomain: "formulario-42bc0.firebaseapp.com",
    projectId: "formulario-42bc0",
    storageBucket: "formulario-42bc0.appspot.com",
    messagingSenderId: "264141118825",
    appId: "1:264141118825:web:9d7611acc7b5ba481271f8",
    measurementId: "G-ZQSLYLVZTC"                          
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();


document.getElementById('formulario').addEventListener('submit', (event)=>{

event.preventDefault();

// validar campo nombre
let entradaNombre = document.getElementById('name');
let errorNombre = document.getElementById('nameError');

if(entradaNombre.value.trim()=== ''){
    errorNombre.textContent = "Faltan caracteres";
    errorNombre.classList.add('error-message');
}else{
    errorNombre.textContent = '';
    errorNombre.classList.remove('error-message');
}

//validar campo email
let emailEntrada = document.getElementById('email');
let emailError = document.getElementById('emailError');
let patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;

if(!patronEmail.test(emailEntrada.value)){
    emailError.textContent = 'Introduzca un email valido';
    emailError.classList.add('error-message');
}else{
    emailError.textContent = '';
    emailError.classList.remove('error-message');
}

//validar campo contrasena
let passwordEntrada = document.getElementById('password');
let passwordError = document.getElementById('passwordError');
let patronPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
if(!patronPassword.test(passwordEntrada.value)){
    passwordError.textContent = 'Contraseña debe tener al menos 8 caracteres, una mayuscula, minuscula y caracter especial';
    passwordError.classList.add('error-message');
    }else{
        passwordError.textContent = '';
        passwordError.classList.remove('error-message');
    }

if(!errorNombre.textContent && !emailError.textContent && !passwordError.textContent){
    
    db.collection("users").add({
        nombre: entradaNombre.value,
        email: emailEntrada.value,
        password: passwordEntrada.value
    })
    .then((docRef) => {
        alert('El formulario se ha enviado con éxito', docRef.id);
        document.getElementById('formulario').reset();
    })
    .catch((error) => {
        alert(error);
    });


}
});









    
