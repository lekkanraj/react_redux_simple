import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import localStorage from 'localStorage';
import {connect} from 'react-redux';
import Home from './Home';
import About from './About';
import Login from './Login';
import Logout from './Logout';

class App extends Component {
  constructor(props){
    super(props);
   
  }
  render() {
    
    return (
      
      <Router>
        <div className="bg-light">
            <WelcomeContent disname={this.props.user.username} disage={this.props.user.age}/>
            <Menus />   
          <Switch>
            <Route exact path ="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </div>
        
      </Router>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
      user:state.userRed
  }

};


export default connect(mapStateToProps)(App);

export class Menus extends Component{
  constructor(props){
    super(props);
    this.state={
      isloggeduser:0,
    }
   
  }
  componentWillMount(){
    this.setState({
      isloggeduser:localStorage.getItem("isloggedin")
    })
    //console.log(localStorage.getItem("isloggedin"));
  }
  render(){
    return(
        <ul>
            <li className="text-primary"><Link to="/">Home</Link></li>
            <li className="text-light"><Link to="/about">About</Link></li>
           {localStorage.getItem("isloggedin") == 0 ?
            (<li className="text-light"><Link to="/login">Login</Link></li>) :
            (<li className="text-light"><Link to="/logout">Logout</Link></li>) 
           }
          </ul>  
    );
  }

}

export class WelcomeContent extends Component{
  constructor(props){
    super(props);
    this.state={
      firstname:''
    }
    
  }
  componentWillMount(){
    this.setState({
      firstname:localStorage.getItem("firstname")
    })
  }
  render(){
    console.log(this.state.firstname);
    return(
    <h1>Hi {localStorage.getItem("firstname") !='' ?
           (<span className="text-success">{localStorage.getItem("firstname")}</span>) : ("Guest")} {this.props.disname +" "+this.props.disage}</h1>
    );
  }
}
