import { useContext, createContext, useState} from 'react'

const DarkModeContext = createContext() //Crear mi contexto
export const useDarkModeContext = () => useContext(DarkModeContext) //me permite utilizar mi contexto

export const DarkModeProvider = (props) => { //Defino mi proveedor del contexto
   const [darkMode , setDarkMode] = useState(false);

   const toggleDarkMode = () => {
      setDarkMode(!darkMode) //cambiar el valor de la variable
      if (darkMode) {
         document.body.firstElementChild.classList.add('darkmode')                             
      } else {                                                                     //agregar o eliminar la clase darkmode
         document.body.firstElementChild.classList.remove('darkmode') 
      }
   }

   return (
      <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
         {props.chidren}
      </DarkModeContext.Provider>
   )
}