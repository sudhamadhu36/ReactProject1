import React,{Component} from 'react'
import './LoginStyle.css';

class HeaderComponent extends Component{
    constructor(props){
        super(props)

        this.state={

        }
    }
    render(){
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark" > 
                    <div className="navbar">
                    <a href="/Login" style={{color:"black",fontstyle:"System,900,bold"}}><h3>Home</h3></a>
                    <a href="/Employees" className="navbar-brand" style={{color:"black",fontstyle:"System,900,bold"}}><h3>Employees</h3></a>
                    <a href="/add-employee/:id" className="navbar-brand" style={{color:"black",fontstyle:"System,900,bold"}}><h3>Edit</h3></a>
                    <a href="/add-employee" className="navbar-brand" style={{color:"black",fontstyle:"System,900,bold"}}><h3>Add</h3></a>
                    </div>
                    </nav>
                </header>
            </div>
        )
    }
}
export default HeaderComponent;