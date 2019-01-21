import React from 'react';
import { Icon, Input } from "antd";
import SubmitBtn from '../../containers/login/SubmitBtn';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    userEmpty = () => {
        this.userNameInput.focus();
        this.setState({ username: '' });
    }

    pwdEmpty = () => {
        this.pwdInput.focus();
        this.setState({ password: '' });
    }

    onChangeUserName = (e) => {
        this.setState({ username: e.target.value });
    }

    onChangePassWord = (e) => {
        this.setState({ password: e.target.value });
    }

    // //登录方法
    // handleSubmit = () => {
    //     console.log(this.state);
    // }
    //
    handleCancle = () => {
        this.setState({
            username: '',
            password: ''
        })
    }


    render() {
        const { username, password } = this.state;
        const suffixUser = username ? <Icon type="close-circle" onClick={this.userEmpty} /> : null;
        const suffixPwd = password ? <Icon type="close-circle" onClick={this.pwdEmpty} /> : null;
        return (
            <section>
                <p>
                    <span>{username}</span>
                    <span>{password}</span>
                </p>
                <section>
                    <Input
                        placeholder="账号"
                        prefix={<Icon type="user" />}
                        suffix={suffixUser}
                        value={username}
                        onChange={this.onChangeUserName}
                        ref={node => this.userNameInput = node}
                    />
                </section>
                <section>
                    <Input
                        placeholder="密码"
                        type="password"
                        prefix={<Icon type="lock" />}
                        suffix={suffixPwd}
                        value={password}
                        onChange={this.onChangePassWord}
                        ref={node => this.pwdInput = node}
                    />
                </section>
                <SubmitBtn info={this.state} handleOther={this.handleCancle}/>
            </section>
        );
    }
}

export default Login;