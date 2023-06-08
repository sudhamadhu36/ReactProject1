import React,{Component, Fragment, useEffect, useState} from 'react'
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeService from '../services/EmployeeService'
import {useNavigate} from 'react-router-dom'

const ListEmployee = () => {

    const [employees, setEmployees]=useState([])

    useEffect(() => {
        EmployeeService.getAllEmployees().then((response)=>{
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })

    }, [])
    
    return(
        <Fragment>
            <div className="container">
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <Table className="table table-striped table-bordered">
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
                                    </tr>
                                )

                            }
                        </tbody>
                    </Table>
                    <br></br>
                </div>
                <div className="row">
                    <Button className="btn btn-primary" inClick={this.addEmployee}>Add Employee</Button>
                </div>
            </div>
        </Fragment>
    )
}

export default ListEmployee;