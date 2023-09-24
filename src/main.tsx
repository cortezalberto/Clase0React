import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'



// Definir un componente llamado App
function App1() {
  return <h1>Hola, Mundo! Soy un componente</h1>;
}
function App2() {
  return <h2>Hola, Mundo! Soy otro componente</h2>;
}


function App3() {
  return (
    <>
      
      <h1>Me muestro en un fragmento en un H1</h1>
      <h5> Me muestro en un fragmento pero soy H5</h5>
   
    </>
  )
}


function App4() {
  const materia= 'Desarrollo de Software'

  return (
    <>
      
      <h1>Soy la función 4 y curso :</h1>
      <h5> {materia}</h5>
   
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App1 />
    <App2 />
    <App3 />
    <App4 />
  </React.StrictMode>,
)
