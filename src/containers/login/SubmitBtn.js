import React from 'react';
import { connect } from 'react-redux';
import Submit from '../../components/Login/Submit';
import history from '../../history';

let mapStateToProps = (state) => {
    return {
        userMsg: state.loginReducer.userInfomation
    }
}

let mapDispatchToProps = (dispatch) => {
    console.log(history);
    return {
        handleSubmit: (data) => {
            dispatch({type: 'LOGIN_SUCCESS', userInfomation: data});
            history.push('/main');
        }
    }
}

let SubmitBtn = connect(mapStateToProps, mapDispatchToProps)(Submit);

export default SubmitBtn;