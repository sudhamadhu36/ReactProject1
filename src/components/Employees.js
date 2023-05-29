import React, {Fragment} from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employee from './Employee';
import {Link,useNavigate} from 'react-router-dom'


function Employees(){

    let history = useNavigate();

    const handleEdit=(id, Name, DOB, Salary, Department)=>{
        localStorage.setItem('Name', Name);
        localStorage.setItem('DOB', DOB);
        localStorage.setItem('Salary', Salary);
        localStorage.setItem('Department', Department);
        localStorage.setItem('Id', id);
    }


    const handleDelete = (id) => {
        var index= Employee.map(function(e){
            return e.id
        }).indexOf(id);

        Employee.splice(index,1);

        history('/Employees');
    }
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                               Id 
                            </th>
                            <th>
                               Name
                            </th>
                            <th>
                                DOB
                            </th>
                            <th>
                                Salary
                            </th>
                            <th>
                                Department
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            Employee && Employee.length>0
                            ?
                            Employee.map((item) => {
                                return(
                                    <tr>
                                        <td>
                                            {item.Id}
                                        </td>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.DOB}
                                        </td>
                                        <td>
                                            {item.Salary}
                                        </td>
                                        <td>
                                            {item.Department}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button onClick={() => handleEdit(item.id, item.Name, item.DOB, item.Salary, item.Department)}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                       }
                        
                    </tbody>
                </Table>
                <br>
                </br>
                <Link clasName='d-grid gap-2' to="/create">
                    <Button size="lg">Add</Button>
                </Link>
            </div>
        </Fragment>
    )

}

export default Employees;