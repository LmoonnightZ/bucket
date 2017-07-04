import React from 'react';

class PropsUsage extends React.Component{

    constructor(){
        super();
    }
    render() {
        return(
            <div>
                hello,{this.props.name}
            </div>
        )
    };
}

PropsUsage.defaultProps={
    name:"unknown",
}


export default PropsUsage;