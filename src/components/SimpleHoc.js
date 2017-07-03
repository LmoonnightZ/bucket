import React,{Component} from 'react';


const SimpleHoc = WrappedComponent =>{
    console.log('simpleHoc');
    return class extends Component{
        render(){
            return <WrappedComponent {...this.props}/>
        }
    }
}

export default SimpleHoc;