import React from "react";
import { Routes, Route } from "react-router-dom";
import Employees from './Employees';
import AddEmployee1 from './AddEmployee1';
import EditEmployee1 from './EditEmployee1';
import Registration from './Registration';
import Login from './Login';

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Employees" element={<Employees/>}/>
        <Route exact path="/add-employee" element={<AddEmployee1/>}/>
        <Route exact path="/edit-employee/:id" element={<EditEmployee1/>}/>
        <Route exact path="/Registration" element={<Registration/>}/>
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;