import React from 'react';
import SimpleHoc from './SimpleHoc';

class Usual extends React.Component{
    constructor(props){
        super();
        this.state={
            name:'name',
            age:12
        }
    }

    render(){
        return(
            <div>
                I am Usual!
            </div>
        );
    }
}

export default SimpleHoc(Usual);