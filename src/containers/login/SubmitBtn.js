import React from 'react';
import { connect } from 'react-redux';
import Submit from '../../components/Login/Submit';


let mapStateToProps = (state) => {
    return {
        userMsg: state.loginReducer.userInfomation
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (data) => {
            dispatch({type: 'LOGIN_SUCCESS', userInfomation: data})
        }
    }
}

let SubmitBtn = connect(mapStateToProps, mapDispatchToProps)(Submit);

export default SubmitBtn;