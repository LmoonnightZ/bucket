import React,{Component} from 'react';


const SimpleHoc = WrappedComponent =>{
    return class extends Component{
        render(){
            return <WrappedComponent {...this.props}/>
        }
    }
}

export default SimpleHoc;