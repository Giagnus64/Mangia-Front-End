import {getUrl} from './DBInfo';

const loginUser = (creds) => {
    return (dispatch) => {
        dispatch({ type: 'LOGIN_USER_TOKEN' });
        fetch(`${getUrl()}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...creds
            })
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.token) {
                    localStorage.setItem("token", data.token)
                    localStorage.setItem("user_id", data.id)
                    localStorage.setItem("username", data.username)
                    dispatch({ type: 'LOGIN_USER_STORE', loginCreds: data })
                } else{
                    dispatch({ type: 'LOGIN_ERROR', errors: data.messages })

                }

            })
    }
}



const createUser = (creds) => {
    return (dispatch) => {
        dispatch({ type: 'CREATE_USER_TOKEN' });
        fetch(`${getUrl()}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user:{
                    ...creds
                }
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.token) {
                    localStorage.setItem("token", data.token)
                    localStorage.setItem("user_id", data.id)
                    localStorage.setItem("username", data.username)
                    dispatch({ type: 'LOGIN_USER_STORE', loginCreds: data })
                } else{
                    dispatch({ type: 'LOGIN_ERROR', errors: data.messages })
                }

            })
    }
}

const logoutUser = () => {
    localStorage.clear()
    return (dispatch) => {
        dispatch({type: "LOGOUT_USER"})
    }
}

export {loginUser, logoutUser, createUser}