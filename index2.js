

// login form

const userName = document.getElementById("input-name");
const eId = document.getElementById("input-email");
const pass = document.getElementById("input-password");
const cPass = document.getElementById("C-password");
// const signEmail = document.getElementById("log-email");
// const signPass = document.getElementById("log-password");
const form = document.getElementById("form-el");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    inputVal()
})


function inputVal(){
    userNameVal = userName.value.trim();
    eIdVal = eId.value.trim();
    passVal = pass.value.trim();
    cPassVal = cPass.value.trim();
    // signEmailVal = signEmail.value.trim();
    // signPassVal = signPass.value.trim();


    // if(signEmailVal === '')
    //     {
    //         setError(signEmail,"please enter the email")
    //     }
    // else if(!isEmail()){
    //     setError(eId,"enter valid email")
    // }    
    // else{
    //     setSuccess(eId)
    // }    



    if(userNameVal === '')
        {
            setError(userName,"please enter the username")
        }
    else{
        setSuccess(userName)
    }    

    
    if(eIdVal === '')
        {
            setError(eId,"please enter the email")
        }
    else if(!isEmail(eIdVal)){
        setError(eId,"enter valid email")
    }    
    else{
        setSuccess(eId)
    }    


    
    if(passVal === '')
        {
            setError(pass,"please enter the password")
        }
    else{
        setSuccess(pass)
    }  
    
    
    if(cPassVal === '')
        {
            setError(cPass,"please enter the confirm password")
        }
    else if(cPassVal !== passVal){
        setError(cPass,"password doesn't match")
    }

    else{
        setSuccess(cPass)
    }    

    function setError(element,message){
        const formControl = element.parentElement;
        const errorControl = formControl.querySelector(".error")

        errorControl.innerText = message;
        formControl.classList.add("error");
        formControl.classList.remove("success");


    }


    function setSuccess(element){
        const formControl = element.parentElement;
        const errorControl = formControl.querySelector(".error")

        errorControl.innerText = '';
        formControl.classList.add("success");
        formControl.classList.remove("error");


    }

    function isEmail(eId){
        return /\S+@\S+\.\S+/.test(eId);
    }
    

}
