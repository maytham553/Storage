import React from "react"
import {Switch , Route} from "react-router-dom"
import Home from "./Page/Home"
import Add from "./Page/Add"
import Update from "./Page/Update"
import Delete from "./Page/Delete"




export default class Routes extends React.Component{

    render(){


        return(<Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Add" exact component={Add}/>
            <Route path="/Update" exact component={Update}/>
            <Route path="/Delete" exact component={Delete}/>

            <Route path="*" component={()=><h1>ERROR 404 <br/> PAGE NOT FOUND</h1>}/>
        </Switch>
        )
    }
} 