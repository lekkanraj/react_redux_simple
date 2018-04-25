import React, {Component} from 'react';
import localStorage from 'localStorage';
//import {Redirect} from 'react-router';
//import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';

class Login extends Component{
    constructor(props){
        console.log(localStorage.getItem("isloggedin"));       
        super(props);
        this.onformchange = this.onformchange.bind(this);
        this.state={
            isLoggedin:'',
            firstname:'',
            message:'',
            errorMessage:''
        }
    }
    onformchange(event){
       // console.log(localStorage.getItem("isloggedin"));
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://localhost/reactjs/demo1/post_check.php', {
            method: 'POST',
           // header:{'Content-Type':'Access-Control-Allow-Headers'},
            //body:JSON.stringify({name:"Lekkan"})
            
              body:data,
        })
        .then((response)=>response.json())
        .then((responsedata)=>{
           // console.log(responsedata.status)
            //this.setState({isLoggedin:responsedata.status});
            //console.log(this.state.isLoggedin);
            if(responsedata.userid>0){
                localStorage.setItem("isloggedin",1);
                localStorage.setItem("firstname",responsedata.firstname);
                this.setState({
                    firstname:responsedata.firstname,
                    message:'',
                    errorMessage:''
                });
            }else{
                localStorage.setItem("isloggedin",0);
                this.setState({
                    errorMessage:'Please check Login info'
                });
            }
            console.log(this.state.errorMessage);
            if(localStorage.getItem("isloggedin")==1){
                    this.props.history.push("/");
            }else{
                
            }
            
        }
        );
        
       
    }

    
    
    
    render(){
        return(
            <div islogged={this.state.isLoggedin}>             
                <h1>Login Form</h1>
                {
                    this.state.errorMessage ? (<div className="alert alert-danger">{this.state.errorMessage}</div>):'' 
                }
                
                <form className="form-inline" id="loginform" onSubmit={this.onformchange}>
                    <div className="form-group">
                        <label>User Name</label>
                        <input className="form-control" required name="username" type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" required name="password" type="password"/>
                    </div>
                    <div className="form-group mt-5">
                        <button className="btn btn-primary" name="submit" type="submit" >Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
