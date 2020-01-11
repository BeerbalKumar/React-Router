import React from 'react'
import {Link } from "react-router-dom"

 
export default class Home extends React.Component{
    goToAbout=()=>{
        this.props.history.push("/about")
    }
    render(){
        console.log("data from about===>",this.props.location.state);

        return(
            <div>
                <h3>Home</h3>
                <button onClick={()=>this.goToAbout()}>Go to about</button> <br/>
                <Link to="/contact">go to contact</Link>

            </div>
        )
    }
}