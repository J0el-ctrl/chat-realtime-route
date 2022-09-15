import {useNavigate,Link,Outlet} from 'react-router-dom';
export const Dasbhoard = () => {

    const navigate=useNavigate()
    const handleclick=()=>{
        navigate("/");
    }
  return (
    <div>
        <h1>Regresando a raiz</h1><br />
        <button onClick={handleclick}>Ir a Raiz</button>
        <br />
        <Link to="welcome">ve a welcome</Link><br />
        <Link to="adios">Adiios</Link><br />
      <Outlet/>
    </div>
  )
}
