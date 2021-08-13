import React from 'react'

class EditStudent extends React.component{
    constructor(props){
        super(props)
        this.state={
            "firstName":"",
            "lastName":"",
            "admissionNo":"",
            "class":""
        }
    }
   
    
    render(){
        return(
<div>
<form onSubmit={this.submitForm}>
            <div className="form-group">
                <label for="formGroupExampleInput">First Name :</label>
                <input type="text" className="form-control input-sm" required="required" onChange={this.handleOnChangeInput} name="firstName" value={inputs.firstName} />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput">Last Name :</label>
                <input type="text" className="form-control input-sm" onChange={this.handleOnChangeInput} name="lastName" value={inputs.lastName} />
            </div> 
            <div className="form-group">
                <label for="formGroupExampleInput2">Admission No. </label>
                <input type="text" className="form-control input-sm" onChange={this.handleOnChangeInput} required="required"  name="admissionNo" value={inputs.admissionNo} />
            </div>
            <div>
            <label for="sel1">Class :</label>
            <select required className="form-control" id="sel1" onChange={this.handleOnChangeInput} name="classS" value={inputs.classS}>
            <option></option>
                <option>U.K.G</option>
                <option>L.K.G</option>
                <option>I</option>
                <option>II</option>
                <option>III</option>
                <option>IV</option>
                <option>V</option>
            </select>
            </div>
            <button type="submit" className="btn btn-primary mb-2" >Submit</button>
            </form>
</div>

        )
    }
}