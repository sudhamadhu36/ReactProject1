
export default function Validation(values){
    const errors={}

    const username_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
    //const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9] {8,}$/;

    if(values.username ===""){
        errors.username="Username is Required";
    }
    else if(!username_pattern.test(values.username)){
        errors.username= "Username is not correct";
       
    }

    if(values.password ===""){
        errors.password="Password is Required";
    }
    /*else if(!password_pattern.test(values.password)){
        errors.password= "Password is not correct";
    }*/

    return errors;
}