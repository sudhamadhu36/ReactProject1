import './App.css';
import Employees from './components/Employees';
import {BrowserRouter as BrowserRouter,Route, Routes}  from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div>
      <div className="header">
        <NavLink className={({isActive}) => isActive? 'active':''} to="/">Home</NavLink>
        &nbsp;
        &nbsp;
        &nbsp;
        <NavLink className={({isActive}) => isActive? 'active':''} to="/Employees">Employess</NavLink>
      </div>
      <div className="content">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Employees' element={<Employees/>}/>
      <Route path='/create' element={<Add/>}/>
      <Route path='/edit' element={<Edit/>}/>
      </Routes>  
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
