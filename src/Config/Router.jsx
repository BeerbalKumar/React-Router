import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './../Containers/home'
import About from './../Containers/about'
import Contact from './../Containers/contact'



export default class BasicRouter extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/about" component={About}/>
                    <Route  path="/contact" component={Contact}/>


                </div>
            </Router>
        )
    }
}