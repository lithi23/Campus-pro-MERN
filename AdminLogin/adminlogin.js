import axios from 'axios'
import React,{Redirect, Link} from 'react'

class AdminLogin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            "userID":"",
            "password":"","loginStatus":null
        }
    }
    renderRedirect = () => {
          return <Redirect to ='/adminSignup' />
        
      }

      onChangeUserID = (event)=>{
          this.setState({userID:event.target.value})
          console.log("userID: " + event.target.value)
      }
      onChangePassword = (event)=>{
          this.setState({password:event.target.value})
          console.log("password: "+ event.target.value)
      }
      handleOnChangeInput=(event)=>{
        this.setState({
            ...this.state , [event.target.name ]: event.target.value
        })
          console.log("inputs: "+ event.target.name + " " + event.target.value)
      }
login= (event) =>{
    console.log("state: " + this.state.userID +" "+this.state.password)
    event.preventDefault()
    axios.post('http://localhost:8001/adminSignup/login',this.state)
    .then(res=>{
        console.log("res " +res.data)
        if(res.data=="success")
        this.setState({"userID":"","password":"",loginStatus:true})
        else
        this.setState({userID:"",password:"",loginStatus:false})
    })
    this.setState({"userID":"","password":""})
    }

render(){
    return (
        <div className ="container" style={{width:"500px"}}>
            <h1 style={{marginBottomm:"100px"}}>Admin Login</h1>
            <form onSubmit={this.login}>
            <div className="form-group">
                <label for="formGroupExampleInput2">User ID : </label>
                <input type="text" className="form-control input-sm" onChange={this.onChangeUserID} required="required"  name="userID" />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Password : </label>
                <input type="password" className="form-control input-sm" onChange={this.onChangePassword} required="required"  name="password" />
            </div>
            <button type="submit" className="btn btn-primary mb-2" >Submit</button>
            <div className ="container">
                
    <div className="float-left"><a href="AdminSignup">Forgot Password?</a></div>
    <div className="float-right">Don't have an account? </div> <div onClick={this.renderRedirect}></div>
    {this.state.loginStatus ? <h5>Logged-in Successfully</h5> : null}
    {this.state.loginStatus==false ? <h5>User ID or Password is incorrect</h5>:null}

</div>
            </form>
        </div>
        
    )}

    }
    export default AdminLogin