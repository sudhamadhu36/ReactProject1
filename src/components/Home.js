import React,{useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from 'react-router-dom'


function Home() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useNavigate();

  function validateForm() {

    return username.length > 0 && password.length > 0;

  }
  
  const handleSubmit=(e) => {
    e.preventDefault();
    history("/Employees");
   };
   
  
  return (
  <div className="d-grid gap2">
  <Form style={({margin:"15rem"})} onSubmit={handleSubmit}>
    <Form.Group classname="mb-3" controlId="formName">
      <Form.Label>Username</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter Username"
      name="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />
    </Form.Group>
    <br></br>
    <Form.Group classname="mb-3" controlId="formPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
      type="password"
      placeholder="Enter Password"
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
    </Form.Group>
    <br></br>
    <Button type="submit" disable={!validateForm()}>Submit</Button>
  </Form>
  </div>
  );
  
}
  
export default Home;