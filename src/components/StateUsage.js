import React from 'react';
import PropsUsage from './PropsUsage';

class StateUsage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }


    handleOnClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}>be clicked {this.state.count} times</button>
                <PropsUsage name="world"/>
                <PropsUsage />
            </div>

        )
    }
}

export default StateUsage;
