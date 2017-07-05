import React from 'react';
import reqwest from 'reqwest';


class Reqwest extends React.Component{
    constructor(props){
        super(props);
        this.mounted = true
        this.state={
            userList:[]
        }
    }

    componentDidMount(){
        this.mounted = true;
        //异步请求
        reqwest({
            url: 'http://localhost:3000/user',
            method: 'get',
            type: 'json'
        }).then(result => {
                this.setState({
                    userList : result
                });
                console.log(this.state.userList);
        },function(err, msg){
            console.log(err)
            console.log(msg)
        });

    }
    componentWillUnmount(){
        this.mounted = false
    }

    componentWillReceiveProps(nextProps) {
        //接受新的props时候被触发
    }

    render(){
        return (
                <div>测试reqwest 异步请求方法</div>
        );
    }
}

export default Reqwest;