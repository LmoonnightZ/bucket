import React from 'react';

class Toggle extends  React.Component{

    constructor(props){
        super(props);
        this.state={
            isToggleOn:true
        };
        this.handleOnclick = this.handleOnclick.bind(this);
    }

    handleOnclick=(e)=>{
        this.setState(prevState=>({
                isToggleOn:!prevState.isToggleOn
        }));
    }
    render(){
        return(
            <button onClick={this.handleOnclick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            )
    };
}


export default Toggle;