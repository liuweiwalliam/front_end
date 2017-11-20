const React = require('react');
const ReactDOM = require('react-dom');
// type:1注册，0登陆
var Input = React.createClass({
    getInitialState: function () {
        return {subType: 1};
    },
    handleClick: function (event) {
        console.log((this.state.subType == 1 ? '注册' : '登陆')+'的提交' );
    },
    changType: function () {
        this.setState({subType: !this.state.subType})
    },
    render: function () {
        return (
            <div>
                <input ref='name' type="text" placeholder="请填写账号"/><br/>

                <input ref='password' type="password" placeholder="请填写账号密码"/><br/>

                <button onClick={this.handleClick}>submit</button>
                <p>
                    <button ref="type" onClick={this.changType}>{this.state.subType == 1 ? '注册' : '登陆'}</button>
                </p>
            </div>
        );
    }
});

ReactDOM.render(<Input/>, document.querySelector('#login'));


import Calendar from 'react-input-calendar';
ReactDOM.render(<Calendar format='DD/MM/YYYY' date='4-12-2014' />, document.querySelector('#calendar'));

