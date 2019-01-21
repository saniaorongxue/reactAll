//用户信息reducer
let loginReducer= (state = {}, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {userInfomation: action.userInfomation});
        case 'LOGIN_OUT':
            return Object.assign({}, state, {userInfomation: {}});
        default:
            return state;
    }
}

 export default loginReducer;