import React, {Fragment, useState, useEffect} from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeService from '../services/EmployeeService';
import {Link} from 'react-router-dom'


function Employees(){

    const [employees, setEmployees]=useState([])

    useEffect(() => {

        getAllEmployees();

    }, [])
    const getAllEmployees =()=>{

        EmployeeService.getAllEmployees().then((response)=>{
            setEmployees(response.data);
            console.log(response)
        }).catch(error =>
            console.log(error));

    }
    const deleteEmployee=(e, id)=>{
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then(getAllEmployees()).catch(e=>console.log(e));
    }
    return(
        <Fragment>
            <div className="container">
            <div className="text-center" style={{color:"black",fontStyle:"normal"}}><h3>List of Employee</h3> </div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr style={{color:"black", textalign:"center"}}>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>DateOfBirth</th>
                                <th>Salary </th>
                                <th>Department</th>
                                <th>Photo</th>
                                <th></th>
                        </tr>
                    </thead>
                    <tbody >
                       {
                            employees.map(
                                    (employee) =>(
                                    <tr id={employee.id} >
                                        <td>{employee.empName}</td>
                                        <td>{employee.sex}</td>
                                        <td>{employee.dob}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.department}</td>  
                                        <td>{employee.photo&&(<img src={`data:image/jpeg;base64,${employee.photo}`}
                                         alt={employee.department}/> )}</td>                      
                                        <td>
                                            <Link  to={`/edit-employee/${employee.id}`} >
                                                <Button style={{backgroundColor:"violet"}}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <button className="btn btn-danger" onClick={(e) => deleteEmployee(e, employee.id)}
                                            style={{marginLeft:"10px"}}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            )
                       }
                        
                    </tbody>
                </Table>
                <br>
                </br>
                <div>
                <Link clasName="btn btn-primary mb-2"  to="/add-employee">
                    <Button size="lg" style={{backgroundColor:"coral"}}>Add Employee</Button>
                </Link>
                </div>
                <br></br>
            </div>
            
        </Fragment>
    )

}

export default Employees;