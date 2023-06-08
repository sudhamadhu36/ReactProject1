import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee';
//import {v4 as uuid} from "uuid";
import {useNavigate} from 'react-router-dom'

function Edit(){
    const[Name, setName] = useState("");
    const[DOB, setDOB] = useState("");
    const[Salary, setSalary] = useState("");
    const[Department, setDepartment] = useState("");
    const[id, setId]=useState("");

    let history = useNavigate();

    var index= Employee.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit=(e) =>{
        e.preventDefault();
        let a=Employee[index];
        a.Name=Name;
        a.DOB=DOB;
        a.Salary=Salary;
        a.Department=Department;

        history("/Employees");
    }
    useEffect(() =>{
        setName(localStorage.getItem('Name'))
        setDOB(localStorage.getItem('DOB'))
        setSalary(localStorage.getItem('Salary'))
        setDepartment(localStorage.getItem('Department'))
        setId(localStorage.getItem('Id'))
    },[])
    return(
        <div>
            <Form className="d-grid gap2" style={({margin:"5rem"})}>
                <Form.Group classname="mb" controlId="formName">
                    Name
                    <Form.Control type="text" placeholder="Enter Name" value={Name} required onChange={(e) => setName(e.target.value)}>  
                    </Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group classname="mb" controlId="formDOB">
                    DOB
                    <Form.Control type="text" placeholder="Enter DOB" value={DOB} required onChange={(e) => setDOB(e.target.value)}>  
                    </Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group classname="mb" controlId="formSalary">
                    Salary
                    <Form.Control type="text" placeholder="Enter Salary"  value={Salary} required onChange={(e) => setSalary(e.target.value)}>  
                    </Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group classname="mb" controlId="formDepartment">
                    Department
                    <Form.Control type="text" placeholder="Enter Department" value={Department} required onChange={(e) => setDepartment(e.target.value)}>  
                    </Form.Control>
                </Form.Group>
                <br></br>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )
}

export default Edit;