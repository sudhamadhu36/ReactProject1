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
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })

    }
    const deleteEmployee=(employeeId) =>{
        EmployeeService.deleteEmployee(employeeId).then((response)=>{
        getAllEmployees();
        }).catch(error =>{
            console.log(error);
        })
    }
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
            <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Id</th>
                                <th>Name</th>
                                <th>Sex</th>
                                <th>DOB</th>
                                <th>Salary </th>
                                <th>Department</th>
                                <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            employees.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.empName}</td>
                                        <td>{employee.sex}</td>
                                        <td>{employee.dob}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.department}</td>
                                        <td>
                                            <Link className="btn btn-info" to={'/edit-employee/${employee.id}'}>Edit</Link>
                                            &nbsp;
                                            <Button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}
                                            style={{marginLeft:"10px"}}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            
                       }
                        
                    </tbody>
                </Table>
                <br>
                </br>
                <Link clasName="btn btn=primary mb-2" to="/add-employee">
                    <Button size="sm">Add Employee</Button>
                </Link>
            </div>
            </div>
            </div>
        </Fragment>
    )

}

export default Employees;