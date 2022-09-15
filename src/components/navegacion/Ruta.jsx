import React from 'react'
import { NavLink
} from 'react-router-dom';
import "../css/Raiz.css"

const   Ruta = () => {
  return (
    <nav className='bg-warning'>
    <div className="container text-center  ">
          <div className="row">
          <div className="col-3">
            {/* para ver si es activo a nivel de consola y comparar con las sentencias de envio */}
             <NavLink  to="/" className={({isActive})=>isActive?' active':""}>
                
                Raiz</NavLink> 

          </div>
          <div className="col-3">
             <NavLink to="/login" className=''>Login</NavLink> 
          </div>
          <div className="col-3">
             <NavLink to="/canalchat" className=''>Chat</NavLink> 
          </div>
          <div className="col-3">
             <NavLink to="/dashboard" className=''>Tablero</NavLink> 
          </div>
          </div>
  </div>
    </nav>
 
    




  )


  
}

export default Ruta