

function Validation(values){
    alert("")
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_Pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(values.fname===""){
        error.fname="First Name should not not be empty"
    }else{
        error.fname=""
    }

    if(values.lname===""){
        error.lname="Last Name should not not be empty"
    }else{
        error.lname=""
    }

    if(values.email===""){
        error.email="email should not not be empty"
    }
    else{
        error.email=""
    }

    if(values.password===""){
        error.password="Password should not be empty"
    }
    else{
        error.password=""
    }
    return error;
}
export default Validation;