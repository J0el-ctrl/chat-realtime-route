import React from 'react'
import {Link} from 'react-router-dom';
const Login = () => {
  const userId='joelbarrera'
  const Login =()=>{

  }
  const Salir=()=>{
    
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <Link to={`/users/${userId}`} >raiz</Link>
      <div className="container">
        <button className='btn btn-success' onClick={Login}>Ingresar</button><br /><br />
        <button className='btn btn-danger' onClick={Salir}>Salir</button>
      </div>
      
      </div>
  )
}

export default Login