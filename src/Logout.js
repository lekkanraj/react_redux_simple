import React from 'react';
import localStorage from 'localStorage';

export default class Logout extends React.Component{
    constructor(props){
        super(props);
        localStorage.setItem("isloggedin",0);
        localStorage.setItem("firstname","");
        //localStorage.clear();
        this.props.history.push("/");


    }
    render(){
        return(
            <h1>test</h1>
        );
    }
}