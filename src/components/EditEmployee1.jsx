import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginStyle.css';
import {Link,useNavigate, useParams} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

const EditEmployee1 = () =>{
    const [empName, setEmpName]=useState('')
    const [sex, setSex]=useState('')
    const [dob, setDob]=useState('')
    const [salary, setSalary]=useState('')
    const [department, setDepartment]=useState('')
    const[photo,setPhoto]=useState('')

    let navigate = useNavigate();
    const {id}=useParams();

    const employee={empName,sex,dob,salary,department,photo};

    const editEmployee=(e)=>{

        e.preventDefault();
        if(employee.empName !== "" && employee.sex !== "" && employee.dob !== "" && employee.salary !== "" && employee.department !== "" && employee.photo !== ""){
        if(id){
            
            EmployeeService.updateEmployee(id, employee).then(navigate("/Employees")).catch(e => console.log(e));
        }
        }else{
            alert("Please fill all the inputs");
        }
    }
    useEffect(() =>{
        if(id) {
            EmployeeService.getEmployeeById(id).then((response) =>{
                setEmpName(response.data.empName);
                setSex(response.data.sex);
                setDob(response.data.dob);
                setSalary(response.data.salary);
                setDepartment(response.data.department);
                setPhoto(response.data.photo);
            }).catch(error => console.log(error));
        }
    }, [id])
   
    return(
    <div>
        <div classname="container">
            <div className="d-flex justify-context-center align-items-center">
                <div className="card col-md-6 offset-md-3 offset-md-3 w-50 boarder addemployeeform">
                    <div className="card-body">
                    <h2 className="text-center" style={{fontStyle:"System,900,bold"}}>Edit Employee</h2>
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
                                <label classname="form-label">Gender</label>
                                <br></br>
                                <input
                                    type="radio"
                                    name="sex"
                                    value="Male"
                                    onChange={(e)=>setSex(e.target.value)}/>Male
                                &nbsp;
                                <input
                                    type="radio"
                                    name="sex"
                                    value="Female"
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
                            <div className="form-group mb-2">
                                <label classname="form-label">Photo</label>
                                <input
                                    type="file"
                                    name='file'
                                    accept="image/*"
                                    className="form-control"
                                    onChange={(e)=>setPhoto(e.target.files[0])}>
                                </input>
                            </div>
                            <div>
                                <button className="btn btn-success" onClick={(e)=> editEmployee(e)}>Submit</button>
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

export default EditEmployee1;