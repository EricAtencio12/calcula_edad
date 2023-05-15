import React from 'react'
import Calculadora from './Calculadora'
import CalculaPeso from './CalculaPeso'
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom'

const Botones = () => {
  return (
    <BrowserRouter>
    <div className='menu'>
        <h4>SELECCIONA EL TIPO DE CALCULADORA</h4>
        <NavLink to='/edad' className="btn1">Calcula tu edad</NavLink>
        <NavLink to='/peso' className="btn2">Evalua tu peso</NavLink>
    </div>
           <Routes>
                <Route path='/edad' element={<Calculadora/>}></Route>
                <Route path='/peso' element={<CalculaPeso/>}></Route>
           </Routes>
    </BrowserRouter>
  )
}

export default Botones