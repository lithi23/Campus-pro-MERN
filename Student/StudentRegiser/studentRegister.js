import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import useSignUpForm from './StudentRegisterHooks'
import './student.css'


let StudentRegister = () => {

    
    const { inputs, dateOfBirth, submitStatus, submitForm, handleOnChangeInput , handleDOBChange} = useSignUpForm()
    return (
        <div className="container b-2" style={{width:"600px"}}>
            <h1 style={{marginBottomm:"30px"}}>Student Reginstration</h1>
            <form onSubmit={submitForm}>
            <div className="form-group">
                <label for="formGroupExampleInput">First Name :</label>
                <input type="text" className="form-control input-sm" required="required" onChange={handleOnChangeInput} name="firstName" value={inputs.firstName} />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput">Last Name :</label>
                <input type="text" className="form-control input-sm" onChange={handleOnChangeInput} name="lastName" value={inputs.lastName} />
            </div> 
            <div className="form-group">
                <label for="formGroupExampleInput2">Admission No. </label>
                <input type="text" className="form-control input-sm" onChange={handleOnChangeInput} required="required"  name="admissionNo" value={inputs.admissionNo} />
            </div>
            <div>
            <label for="sel1">Class :</label>
            <select required className="form-control" id="sel1" onChange={handleOnChangeInput} name="classS" value={inputs.classS}>
            <option></option>
                <option>U.K.G</option>
                <option>L.K.G</option>
                <option>I</option>
                <option>II</option>
                <option>III</option>
                <option>IV</option>
                <option>V</option>
            </select>
            <label for="sel1">Section :</label>
            <select required className="form-control" id="sel1" onChange={handleOnChangeInput} name="section" value={inputs.section}>
            <option></option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
                <option>G</option>
            </select>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Address :</label>
                <input type="text" className="form-control input-sm" required="required" onChange={handleOnChangeInput} name="address" value={inputs.address}/>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Father's Name :</label>
                <input type="text" className="form-control input-sm" required="required" onChange={handleOnChangeInput} name="fatherName" value={inputs.fatherName}/>
            </div>
            <div className="form-group">
            <label>Gender : </label><br></br>
            <div className="form-check form-check-inline pr-5">
                <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Male" onChange={handleOnChangeInput} required="required" />
                <label className="form-check-label font-weight-normal" for="inlineRadio1">Male</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Female" onChange={handleOnChangeInput} required="required"/>
                <label className="form-check-label font-weight-normal" for="inlineRadio2">Female</label>
            </div>
            </div>
            <div>
                <label className="pr-5">Date of Birth :</label>
                <DatePicker
                   onChange={handleDOBChange} selected={dateOfBirth}  required="required"
                />
            </div>            
            <button type="submit" className="btn btn-primary mb-2" >Submit</button>
            { submitStatus ? <h5>Student details registered successfully</h5>:null }
            </form>
        </div>
    )


}


export default StudentRegister