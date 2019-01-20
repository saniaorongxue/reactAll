import React from 'react';
import { Icon, Input} from "antd";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    valueEmpty = (type) => {
        if(type === 'username') {
            this.setState({username: ''})
        }else{
            this.setState({password: ''})
        }
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    onChangePwd = (e) => {
        this.setState({
            password: e.target.value
        })
    }



    render() {
        let { username, password } = this.state;
        const usernameSuf = username ? <Icon type="close-circle" onClick={this.valueEmpty('username')}/> : null;
        const passwordSuf = password ? <Icon type="close-circle" onClick={this.valueEmpty('password')}/> : null;
        return (
            <section>
                <section className="logo"></section>
                <p>
                    <span>{username}</span>
                    <span>{password}</span>
                </p>
                <section>
                   <Input
                       prefix={<Icon type="user"/>}
                       value={username}
                       placeholder="账号"
                       suffix={usernameSuf}
                       onChange={this.onChangeUsername}
                       ref={(node) => {this.userInput = node}}
                   />
                </section>
                <section>
                    <Input
                        prefix={<Icon type="lock"/>}
                        value={password}
                        placeholder="密码"
                        suffix={passwordSuf}
                        onChange={this.onChangePwd}
                        ref={(node) => {this.pwdInput = node}}
                    />
                </section>
            </section>
        )
    }
}

export default Login;