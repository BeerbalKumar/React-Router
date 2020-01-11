import React from 'react'

let goToBack=(props)=>{
   let user ={
        name:"hishmat",
        city:"Mithi",
    }
    props.history.push("/",user);

    console.log(props);
}

export {goToBack} 