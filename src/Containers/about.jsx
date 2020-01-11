import React from 'react'
import { BrowserRouter as Link } from "react-router-dom"
import {goToBack} from './../Config/function'
 
export default class About extends React.Component{
    goToHome=(props)=>{
        goToBack(props)
    }
    render(){
        return(
            <div>
                <h3>About</h3>
                <button onClick={()=>this.goToHome(this.props)}>Go back</button>
            </div>
        )
    }
}