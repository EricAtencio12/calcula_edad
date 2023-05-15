import React from 'react'
import Calculadora from './Calculadora'
import CalculaPeso from './CalculaPeso'
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom'

const Botones = () => {
  return (
    <BrowserRouter>
    <div className='menu'>
        <h4>SELECCIONA EL TIPO DE CALCULADORA</h4>
        <NavLink to='/calcula_edad/edad' className="btn1">Calcula tu edad</NavLink>
        <NavLink to='/calcula_edad/peso' className="btn2">Evalua tu peso</NavLink>
    </div>
           <Routes>
                <Route path='/calcula_edad/edad' element={<Calculadora/>}></Route>
                <Route path='/calcula_edad/peso' element={<CalculaPeso/>}></Route>
                <Route path='*' element={<Calculadora/>}></Route>
           </Routes>
    </BrowserRouter>
  )
}

export default Botones