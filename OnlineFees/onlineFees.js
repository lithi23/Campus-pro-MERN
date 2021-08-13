import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


class OnlineFees extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "name": "",
            "date": new Date(),
            "admissionNo": 0
        }
    }
    dateEvent=(e)=>{
this.setState({date:e})
    }

    render() {
        return (
            <div className="container" style={{width:"400px"}}>
                <h1 style={{marginBottomm:"50px"}}>Online Fees</h1>
                <form>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Name :</label>
                        <input type="text" className="form-control input-sm" id="name" />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Admission No. </label>
                        <input type="text" className="form-control input-sm" required="require" id="name" />
                    </div>
                    <div className="pb-4">
                    <label className="pr-5">Date of Birth :</label>
                        <DatePicker
                        selected={this.state.date} onChange={this.dateEvent}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        )
    }
}

export default OnlineFees
