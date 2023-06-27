import {  useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function login(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/api/register/login", {
            email: email,
            password: password,
            }).then((res) =>
            {
                console.log(res.data);

                if (res.data.message === "Email or Password not exits")
                {
                 alert("Email or password not exists");
                }
                else if(res.data.message === "Login Success")
                {
                  navigate('/Employees');
                }
                else
                {
                  alert("Incorrect email or password");
                }
            }, fail => {
            console.error(fail);
           });
        }
        catch (err) {
           alert(err);
        }
    }
  
    return (
        <div>
        <div className="container">
            <div className="d-flex justify-context-center align-items-center">
            <div className="card col-md-4 offset-md-3 offset-md-3 w-40 boarder loginform">
            <div className="card-body">
                <h2 className="text-center" style={{fontStyle:"System,900,bold"}}>Login</h2>
                    <form >
                        <div className="form-group mb-2">
                            <label classname="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}>
                            </input>
                        </div>
                        <div className="form-group mb-2">
                            <label classname="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}>
                            </input>
                        </div>
                        <br></br>
                        <div className='d-grid'>
                        <button type="submit" className="btn btn-primary" onClick={login}  style={{backgroundColor:"coral"}}>Login</button>
                        </div>
                        <br></br>
                        <div className="text-center">
                             Don't have an Account?
                            &nbsp;
                            <Link to='/Registration' style={{color:"purple"}}> Sign Up </Link>
                        </div>
                    </form>
 
                </div>
            </div>
        </div>
        </div>
     </div>
    )
  }
  
  export default Login;