import {useState} from 'react'
import axios from 'axios'


let useSignUpForm =(callback) =>{

    const[submitStatus, setSubmitStatus] = useState("")
    const[inputs, setInputs] = useState({})
    const [dateOfBirth, setDOB] = useState(new Date()); 
    

    const submitForm =(event) =>{
        event.preventDefault()        
        console.log("inputsObj: "+inputs.firstName)
        axios.post('http://localhost:8001/studentRegister',inputs)
      .then(res => {
       console.log("response: " + res.data._id)
       if(res.data._id){
        setSubmitStatus(true)
       }
    })
    }
    
    const handleDOBChange = (dateOfBirth)=>{
        setDOB(dateOfBirth)
        setInputs(inputs => ({...inputs , dateOfBirth: dateOfBirth}))
        console.log("dob:" + dateOfBirth)
    }

     const handleOnChangeInput =(event) =>{       
        event.persist()        
        setInputs(inputs => ({...inputs , [event.target.name ]: event.target.value}))
        console.log("Input: "+event.target.name + " value: "+event.target.value) 
    }
 
return{ inputs, submitStatus, dateOfBirth, submitForm, handleOnChangeInput, handleDOBChange }
}

export default useSignUpForm