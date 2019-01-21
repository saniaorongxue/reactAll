import React from 'react';
import { Button } from 'antd';

const Submit = ({info, userMsg, handleSubmit, handleOther}) => {
    return (
        <section>
            <Button type="primary" onClick={() => {handleSubmit(info)}}>登录</Button>
            <Button type="danger" onClick={() => {handleOther()}}>取消</Button>
        </section>
    )
}

export default Submit;