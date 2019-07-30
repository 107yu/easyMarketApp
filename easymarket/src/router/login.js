import React from 'react';
import RouterMap from './map'
import Routes from "./routes"
import { Route, Switch, Redirect } from 'react-router-dom'
function Login(router){
    let token=localStorage.getItem("token")
   if(!token){
        return <Redirect to='/login' exact key={1}/>
   }
   else{
       return router
   }
}
export default Login