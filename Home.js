
import React from 'react'

class Home extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            "value":0
        }
    }
    render(){
        return(
            <h1>Homepage</h1>
        )
    }
}
export default Home