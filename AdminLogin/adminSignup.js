import React from 'react'
import axios from 'axios'
class AdminSignup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            "userID":"",
            "firstName":"",
            "lastName":"",
            "email":"",
            "mobileNo":"",
            "password":"",
            "confirmPassword":"","passwordCheck":false,"submitStatus":false
        }
    }

  handleOnChangeInput = (event)=>{
this.setState({
    ...this.state , [event.target.name ]: event.target.value
})
console.log("inputs: "+ event.target.name + " " + event.target.value)
    }

    onSubmit = (event) =>{
        event.preventDefault()
        if(this.state.password!==this.state.confirmPassword)
        this.setState({passwordCheck: true,"password":"","confirmPassword":""})
        else{
            axios.post('http://localhost:8001/adminSignup/signUp',this.state)
            .then(res => {
             console.log("response: " + res.data._id)
             if(res.data._id){
              this.setState({submitStatus:true})
             }
          })
            this.setState({"userID":"", "firstName":"", "lastName":"", "email":"", "mobileNo":"", "password":"", "confirmPassword":""})
            
        }
    }

render(){
    return (
        <>
        <div className="container" style={{width:"600px"}}>
        <h2>Signup page</h2>
        <form onSubmit={this.onSubmit}  ref="form"> 
        <div className="form-group">
                <label for="formGroupExampleInput">User ID :</label>
                <input type="text" className="form-control input-sm" required="required" onChange={this.handleOnChangeInput} name="userID" value = {this.state.userID}/>
            </div>
        <div className="form-group">
                <label for="formGroupExampleInput">First Name :</label>
                <input type="text" className="form-control input-sm" required="required" onChange={this.handleOnChangeInput} name="firstName" value = {this.state.firstName}/>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput">Last Name :</label>
                <input type="text" className="form-control input-sm" onChange={this.handleOnChangeInput} name="lastName" value={this.state.lastName}/>
            </div> 
            <div className="form-group">
                <label for="formGroupExampleInput2">Email :</label>
                <input type="email" className="form-control input-sm" onChange={this.handleOnChangeInput} required="required"  name="email" value ={this.state.email}/>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Mobile No :</label>
                <input type="number" className="form-control input-sm" onChange={this.handleOnChangeInput} required="required"  name="mobileNo" value ={this.state.mobileNo}/>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Password :</label>
                <input type="password" className="form-control input-sm" onChange={this.handleOnChangeInput} required="required"  name="password" value={this.state.password}/>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Confirm Password :</label>
                <input type="password" className="form-control input-sm" onChange={this.handleOnChangeInput} required="required"  name="confirmPassword" value={this.state.confirmPassword} />
            </div>
            <button type="submit" className="btn btn-primary mb-2" >Submit</button>
            {this.state.passwordCheck ? <h5>Password and Confirm password should be same</h5> : null }
            {this.state.submitStatus ? <h5>SUBMITTED SUCCESSFULY</h5>:null}
            </form>
            </div>
            </>
    )
}
}
export default AdminSignup