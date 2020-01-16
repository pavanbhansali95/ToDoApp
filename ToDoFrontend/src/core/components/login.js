import React, { useContext } from 'react';
import axios from 'axios';
import {AuthContext} from '../../context/auth.context';
const Login = (props) => {
    let userRef;
    let passwordRef;
    const authContext = useContext(AuthContext);
    const handleSubmit = (e) =>{
        let userName = userRef.value;
        let password = passwordRef.value;
        const userDetails = {
            username: userName,
            password: password
        };
        axios.post('http://localhost:8000/todo/authenticate' ,userDetails).then(res => {
            if(res.data.data.result.token){
                let token = res.data.data.result.token;
                localStorage.setItem('userToken',token);
                authContext.login(true);
            } else {
                alert(res.data.data.result);
                authContext.login(false);
            }
        }).catch(err => alert(err));
        e.preventDefault();
        }
    return (
              <form onSubmit={handleSubmit}>
                  <div className="form-div">
              <label className="labels">Username</label>
              <input ref={(username) => userRef = username} type="text" placeholder="username" />
            </div>
            <div className="form-div">
              <label className="labels">Password</label>
              <input ref={(password) => passwordRef = password}  placeholder="Password"  type="password"  />
            </div>
            <div>
            <input type="submit" value="Submit" />
            </div>
        </form>
    )
}
export default Login;