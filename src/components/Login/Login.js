import React from 'react';
import {Button, Icon} from "antd";

class Login extends React.Component {
    render() {
        return (
            <section>
                Login
                <Button type="primary">primary</Button>
                <Icon type="radius-setting" />
            </section>
        )
    }
}

export default Login;