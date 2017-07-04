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
        console.log(e);
        this.setState(prevState=>({
                isToggleOn:!prevState.isToggleOn
        }));
    }
    render(){
       {/* <button onClick={(e) => (e.preventDefault(),this.handleOnclick(e))}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>*/}
        return(
                <button onClick={this.handleOnclick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            )
    };
}


export default Toggle;