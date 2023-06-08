import React, {useState, useEffect} from 'react'
import {Link,useNavigate, useParams} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () =>{
    const [empName, setEmpName]=useState('')
    const [sex, setSex]=useState('')
    const [dob, setDob]=useState('')
    const [salary, setSalary]=useState('')
    const [department, setDepartment]=useState('')
    let history = useNavigate();
    const {id}=useParams();

    const saveOrEditEmployee=(e)=>{
        e.preventDefault();

        const employee={empName,sex,dob,salary,department}

        if(id){
            EmployeeService.updateEmployee(id, employee).then((response) =>{
                console.log(response.data)
                history.push('/Employees')
            }).catch (error =>{
                console.log(error);
            })
        }else{
            EmployeeService.createEmployee(employee).then((response)=>{
                console.log(response.data)
                history.push('/Employees');

            }).catch(error =>{
                console.log(error)
            })
        }
    }

    useEffect(() =>{
        EmployeeService.getEmployeeById(id).then((response) =>{
            setEmpName(response.data.empName)
            setSex(response.data.sex)
            setDob(response.data.dob)
            setSalary(response.data.salary)
            setDepartment(response.data.department)
        }).catch(error =>{
            console.log(error)
        })
    }, [id])

    const title=() =>{
        if(id){
            return <h2 className="text-center">Edit Employee</h2>
        }else{
            return <h2 className="text-center">Add Employee</h2>
        }
    }
    return(
        <div>
            <br /><br />
            <div classname="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label classname="form-label">Name</label>
                                    <input
                                        type="text"
                                        placeHolder="Enter Employee Name"
                                        name="empName"
                                        className="form-control"
                                        value={empName}
                                        onChange={(e)=>setEmpName(e.target.value)}>
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label classname="form-label">Sex</label>
                                    <br></br>
                                    <input
                                        type="radio"
                                        name="Male"
                                        value={sex}
                                        onChange={(e)=>setSex(e.target.value)}/>Male
                                    &nbsp;
                                    <input
                                        type="radio"
                                        name="Female"
                                        value={sex}
                                        onChange={(e)=>setSex(e.target.value)}></input>Female
                                    
                                </div>
                                <div className="form-group mb-2">
                                    <label classname="form-label">DOB</label>
                                    <input
                                        type="date"
                                        name="dob"
                                        className="form-control"
                                        value={dob}
                                        onChange={(e)=>setDob(e.target.value)}>
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label classname="form-label">Salary</label>
                                    <input
                                        type="text"
                                        placeHolder="Enter Salary"
                                        name="salary"
                                        className="form-control"
                                        value={salary}
                                        onChange={(e)=>setSalary(e.target.value)}>
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label classname="form-label">Department</label>
                                    <input
                                        type="text"
                                        placeHolder="Enter Department"
                                        name="department"
                                        className="form-control"
                                        value={department}
                                        onChange={(e)=>setDepartment(e.target.value)}>
                                    </input>
                                </div>
                                <div>
                                    <button className="btn btn-success" onClick={(e)=> saveOrEditEmployee(e)}>Submit</button>
                                    &nbsp;
                                    <Link  to="/Employees" className="btn btn-danger">Cancel</Link>
                                </div>
                            </form>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddEmployee;