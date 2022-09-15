import {BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Ruta from './components/navegacion/Ruta';
import CanalChat from './components/pages/CanalChat';
import { Dasbhoard } from './components/pages/Dasbhoard';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import NotFound from './components/pages/NotFound';
import Raiz from './components/pages/Raiz';
import { UserPage } from './components/pages/UserPage';


function App() {
  return (
    <Router>  
      <Ruta/>
      <Routes>
        <Route path='/' element={<Raiz/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/users' element={<UserPage/>}/>
        <Route path='/users/:userId' element={<UserPage/>}/>
        <Route path='/usuarios' element={<Navigate to="/users"/>}/>
        
        <Route path="/canalchat"  element={<CanalChat/>}  />

        {/* anidando las subrutas, resaltar que en elemen pueden ir otros componentes de subrutas */}
        <Route path="/dashboard/*" element={<Dasbhoard/>}  >
        <Route path='welcome' element={<p>Bienvenido!!!</p>} />
        <Route path='adios' element={<p>adios!!!</p>} />
        </Route> 

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
