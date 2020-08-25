import React from 'react';

export default class Home extends React.Component{


    render(){

        return( 
    <div className="nav">
    <a className="navItem" href='/'><h4>Home</h4></a>
    <a className="navItem" href='/Add'><h4>Add</h4></a>
    <a className="navItem" href='/Update'><h4>Update</h4></a>
    <a className="navItem" href='/Delete'><h4>Delete</h4></a>


    </div>
        )
    }

}