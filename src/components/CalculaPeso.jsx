import { useState } from 'react'

import '../App.css'
import '../estilos/peso.css'

function CalculaPeso() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [imc,setImc]=useState(0)
  const [descripcion,setDescripcion]=useState("")

 const [color_input,setColor_input]=useState('')

  const calcuPeso=()=>{
    const im_temporal=peso/(altura*altura)

    if(peso=='' || altura==''){
      setColor_input('color')
      return false
    }else{
      setColor_input('')
    if(im_temporal<18.5){
      setDescripcion("Estas bajo de peso")

    }else if(im_temporal>=18.5 && im_temporal<=24.9){
      setDescripcion("Tienes un peso saludable")

    }else if(im_temporal>=25.0 && im_temporal<=29.9){
      setDescripcion("Tienes sobre peso")

    }else if(im_temporal>=30){
      setDescripcion("Tienes problemas de obecidad")
    }else{
      setDescripcion("Ingresa valores válidos")
      return false
    }
        setImc(im_temporal)
        console.log(descripcion)
    }
  }

  const capturaPeso=(e)=>{
    setPeso(e.target.value)
  }
  const capturaAltura=(e)=>{
    setAltura(e.target.value)
  }

  return (
    <>
        <div className='grid_container_peso'>
              <h1 className='header-title_peso'>EVALUA TU PESO</h1>
              <div className='div_peso'>
                  <label htmlFor="" className='mi_etiqueta'>Kilogramos</label>
                  <input type="number" 
                    className={color_input}
                    min="1" max="31" value={peso} 
                    placeholder='Peso' 
                    onChange={capturaPeso}
                    required/>
             </div>
             <div className='div_peso'>
                <label htmlFor="" className='mi_etiqueta'>Altura</label>
                <input type="number" className={color_input}
                min="1" max="100" onChange={capturaAltura}
                  value={altura} required placeholder='Altura'/>
              </div>
              <button onClick={calcuPeso} className='btn_cal_peso'>Calcular</button>
              <div><br />
                <h4>Su IMC es: {imc} </h4>
              </div><br /><br />
              <div className='peso_descripcion'>
                {descripcion}
              </div>
            </div>
        
    </>
  )
}

export default CalculaPeso
