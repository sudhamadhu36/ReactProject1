import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee';
import {v4 as uuid} from "uuid";
import {useNavigate} from 'react-router-dom'

function Add(){

    const[Name, setName] = useState("");
    const[DOB, setDOB] = useState("");
    const[Salary, setSalary] = useState("");
    const[Department, setDepartment] = useState("");

    let history = useNavigate();

    const handleSubmit=(e) =>{
        e.preventDefault();
        const ids=uuid();
        let uniqueId=ids.slice(0,8);

        let a=Name,
        b= DOB,
        c= Salary,
        d= Department;

        Employee.push({id: uniqueId, Name: a, DOB: b, Salary: c, Department: d});
    
        history("/Employees");
    }   
    return(
        <div>
            <Form className="d-grid gap2" style={({margin:"5rem"})}>
                <Form.Group classname="mb-3" controlId="formName">
                    Name
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>  
                    </Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group classname="mb-3" controlId="formDOB">
                    DOB
                    <Form.Control type="text" placeholder="Enter DOB" required onChange={(e) => setDOB(e.target.value)}>  
                    </Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group classname="mb-3" controlId="formSalary">
                    Salary
                    <Form.Control type="text" placeholder="Enter Salary" required onChange={(e) => setSalary(e.target.value)}>  
                    </Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group classname="mb-3" controlId="formDepartment">
                    Department
                    <Form.Control type="text" placeholder="Enter Department" required onChange={(e) => setDepartment(e.target.value)}>  
                    </Form.Control>
                </Form.Group>
                <br></br>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Add;