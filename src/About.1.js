import React from 'react';
import {Component}from 'react';


export default class About extends Component{
   
    constructor(){
        super();
        this.state={users:[]};
        
    }
    componentWillMount(){ 
       /* this.serverRequest = $.get("http://localhost/angular2/demo1/get_users.php", function (users) {
            this.setState({
                users: users.records
            });
        }.bind(this));*/
        fetch('http://localhost/reactjs/demo1/get_users_react.php') 
        .then((response)=>response.json())
        .then((responseJson) =>
                {
                    this.setState({users: responseJson})
                }
        );

    }
    render(){
        console.log(this.state.users);
        return(
            <div className="col-md-8">
                <h2 className="">About content Here</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>First Name</th>
                            <th>First Name</th>
                        </tr>
                    </thead>
                {
                    this.state.users.map(
                            (dynamicComponent, i) => 
                            <Getcontent id = {dynamicComponent.id} firstname = {dynamicComponent.firstname}/>
                            )
                        }
            </table>
            </div>
        ); 
    }
}

class Getcontent extends  Component{
    render(){
        return(
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.firstname}</td>
                <td>{this.props.firstname}</td>
            </tr>
        ); 
    }
}