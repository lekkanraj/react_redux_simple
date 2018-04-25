import React from 'react';
import {Component}from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';



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
        console.log(this.state.users.length);
        const options = {
            paginationSize: 4,
            pageStartIndex: 1,
            // alwaysShowAllBtns: true, // Always show next and previous button
            // withFirstAndLast: false, // Hide the going to First and Last page button
            // hideSizePerPage: true, // Hide the sizePerPage dropdown always
            // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
            firstPageText: 'First',
            prePageText: 'Back',
            nextPageText: 'Next',
            lastPageText: 'Last',
            nextPageTitle: 'First page',
            prePageTitle: 'Pre page',
            firstPageTitle: 'Next page',
            lastPageTitle: 'Last page',
            sizePerPageList: [{
              text: '5', value: 5
            }, {
              text: '10', value: 10
            }, {
              text: 'All', value: this.state.users.length
            }] // A numeric array is also available. the purpose of above example is custom the text
          };
          const columns = [{
            dataField: 'id',
            text: ' ID'
          }, {
            dataField: 'firstname',
            text: ' Name',
            sort:true
          }];
        return(
            <div>
                <h1>Welcome</h1>
                <BootstrapTable
                    keyField='id'
                    data={ this.state.users }
                    columns={ columns }
                    pagination={ paginationFactory(options) } 
                    hover
                    striped
                    noDataIndication="No Records found."
                />
            </div>
        ); 
    }
}

