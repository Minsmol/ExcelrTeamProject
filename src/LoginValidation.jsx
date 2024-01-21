

function Validation(values){
    alert("")
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_Pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email===""){
        error.email="email should not not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email="Email Didnt match"
    }else{
        error.email=""
    }

    if(values.password===""){
        error.password="Password should not be empty"
    }
    else if(!password_Pattern.test(values.password)){
        error.password="Password didnt match"
    }else{
        error.password=""
    }
    return error;
}
export default Validation;