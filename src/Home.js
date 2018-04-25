import React from 'react';
import {Component}from 'react';
import {connect} from 'react-redux';
import {setUserName,setUserAge} from './actions/userAction';

class Home extends Component{
    constructor(props){
        super(props);
    }

    Changename(){
        this.props.setName("Lekkan Raj");
        this.props.setAge(31);
    }
    render(){
        return(
            <div>
                <h2 className="">Home content Here {this.props.user.username +"  "+ this.props.user.age}</h2>
                <button name="" onClick={this.Changename.bind(this)} >Name Update</button>
            </div>
        ); 
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.userRed
    }

};

const mapDispatchToProps=(dispatch)=>{
    return{
        setName:(name)=>{
            /* dispatch({
                type:"SET_NAME",
                payload:name
            }); */
            dispatch(setUserName(name));
        },
        setAge:(number)=>{
            /* dispatch({
                type:"SET_NAME",
                payload:name
            }); */
            dispatch(setUserAge(number));
        }
    }

};

export default connect(mapStateToProps,mapDispatchToProps)(Home);