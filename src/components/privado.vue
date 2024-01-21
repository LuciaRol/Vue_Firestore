<script setup>
import { useRouter, useRoute } from 'vue-router';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

/* PRUEBA */
import { useCollection } from 'vuefire'

import { useFirestore } from 'vuefire';
/* import { Icon } from '@iconify/vue'; */
// Añadir nota y borrar
import { collection, addDoc } from "firebase/firestore"; 
// Borrar nota
import { doc, deleteDoc } from "firebase/firestore"; 

/* PRUEBA */


// constante para poder realizar la autentificación con credenciales de google
const provider = new GoogleAuthProvider();


/* sale una ventana pop up de google para realizar la autentificacion */


  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });


/* PRUEBA */

// verificación con correo y contraseña



  const db= useFirestore();
  const todos = useCollection(collection(db, 'todos'))
  /* const list = useCollection(query(todos, where ("idUsuario", "==", ""))) */
  /* let uid = null; */


  let text = "";
  let prioridad = "normal";


  function altaNota(){
    const docRef = addDoc(collection(db, "todos"), {
      texto: text,
      prioridad: "normal"
    });
    text = "";
  }
  function borradoNota(id){
    deleteDoc(doc(db,"todos",id))
  }

  /* PRUEBA */

  
</script>

<template>
  <link rel="stylesheet" href="../css/style.css">
  <h2>TUS NOTAS - ÁREA PRIVADA</h2>

    <input @keydown.enter="altaNota()" type="text" name="" id="" v-model="text"><button @click="altaNota()">Alta nota</button>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <span>{{ todo.texto }} - {{ todo.prioridad }}</span>
      <button @click="borradoNota(todo.id)">Eliminar<Icon icon="ph:trash-simple-bold"/></button>
    </li>
  </ul>
</template>