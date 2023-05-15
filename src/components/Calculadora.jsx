import { useState } from 'react'

import '../App.css'


//Codigo para calcular edad en 


function Calculadora() {
  const [dia, setDia] = useState(1)
  const [mes, setMes] = useState(1)
  const [anio, setAnio] = useState(1992)
  const [edaduser,setEdaduser]=useState(0)

  const calculaEdad=()=>{
    var fechaActual = new Date();

    let edad = fechaActual.getFullYear() - anio;
  
    let fecha_mes=fechaActual.getMonth()+1
    let mes_actual = mes-fecha_mes;
  
  
    if (fecha_mes<=mes) {

          if(dia>fechaActual.getDate() ){
            edad--;
           
          }else {
               
               let resultado=dia/fechaActual.getDate()
               console.log('resultado '+resultado)
              if((resultado==0 && mes==fecha_mes)||(resultado!=0 && mes!=fecha_mes) ){
                edad--;
              }
           
            console.log('edad ..... '+edad)
          }
         
          console.log('La edad es : '+edad)
    }
     console.log("La edad es : "+edad)
     return setEdaduser(edad);
  }

  const capturaDia=(e)=>{
    setDia(e.target.value)
  }
  const capturaMes=(e)=>{
    setMes(e.target.value)
  }
  const capturaAnio=(e)=>{
    setAnio(e.target.value)
  }

  return (
    <>
    
        <div className='grid_container'>
              <h1 className='header-title'>CALCULA TU EDAD</h1>
             <input type="number" 
             min="1" max="31" value={dia} 
             placeholder='ingresa el día' 
             onChange={capturaDia}
             required/>
             <select name="" id="" value={mes} onChange={capturaMes}>
                  <option value="1">Enero</option>
                  <option value="2">Febreo</option>
                  <option value="3">Marzo</option>
                  <option value="4">Abril</option>
                  <option value="5">Mayo</option>
                  <option value="6">Junio</option>
                  <option value="7">Julio</option>
                  <option value="8">Agosto</option>
                  <option value="9">Septiembre</option>
                  <option value="10">Octubre</option>
                  <option value="11">Noviembre</option>
                  <option value="12">Diciembre</option>
             </select>
             <input type="number" min="1" onChange={capturaAnio}
              value={anio} required placeholder='Ingresa el año'/>
              <button onClick={calculaEdad} >Calcular</button>
              <div>
                <h4>Su edad es: {edaduser} años</h4>
              </div>
            </div>
        
    </>
  )
}

export default Calculadora
