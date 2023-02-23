import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
   apiKey: "AIzaSyDXZFmMRqgv-1gZYm2vlSfjZdibAp2Rjgk",
   authDomain: "react-coder-a19de.firebaseapp.com",
   projectId: "react-coder-a19de",
   storageBucket: "react-coder-a19de.appspot.com",
   messagingSenderId: "985088540737",
   appId: "1:985088540737:web:23e8e7376d46b7506e86c0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore() // Consultar base de datos

/*CRUD Productos

   CREAR
   LEER
   MODIFICACION
   ELIMINACION

   de datos

*/

export const cargarBDD = async () => {
   const promise = await fetch('./json/productos.json')
   const productos = await promise.json()
   productos.forEach( async (prod) => {
      await addDoc(collection(db,"productos"), {
         nombre: prod.nombre,
         descripcion : prod.descripcion,
         precio: prod.precio,
         stock: prod.stock,
         idCategoria: prod.idCategoria,
         imagenCard: prod.imagenCard
      })
   })
}

export const getProducts = async() => {
   const productos = await getDocs(collection(db, 'productos'))
   const items = productos.docs.map(prod => {
      return {...prod.data(), id: prod.id}
   })
   return items
}

export const getProduct = async(id) => {
   const producto = await getDoc(doc(db, 'productos', id))
   const item = {...producto.data(), id: producto.id}
   return item
}

export const updateProduct = async(id, info) => {
   await updateDoc(doc(db, 'productos', id), info)
}

export const deleteProduct = async(id) => {
   await deleteDoc(doc(db, 'productos', id))
}