import React, {Component} from 'react';

class Local extends React.Component{
    constructor(props){
        super(props);
        localStorage.setItem('name',JSON.stringify({ test: 'name', test2: 'num',}));
    }

    render(){
        const item = JSON.parse(localStorage.getItem('name','num'));
     
        
        return(
            <div>
                {item.test}
                <br />
                {item.test2}
            </div>
        );
    }
}
export default Local;