import React from 'react'
import "../css/ContainerChat.css"
const CanalChat = () => {
  return (
    <div >
        <div className='container mt-3 text-center container-chat bg-secondary'>
        <div className='text-start'>
          <span className='badge bg-primary'>Clientejojojo</span>  
        </div>
       
        <div className='text-end'>
           <span className='badge bg-info'>Yo</span> 
        </div>
     
        <form   id="formulario"
                className='container mb-2 fixed-bottom'
        >
            <input type="text" className='form-control' placeholder='Mensaje' id="texto"/>
            <button className='btn btn-success w-100 mt-2'>Enviar</button>
        </form>
        </div>
       


    </div>
  )
}

export default CanalChat