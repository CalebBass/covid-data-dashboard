import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthApi } from '../api/AuthApi';

const Login = () => {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [token, setToken] = useState<string>('');
    const [submitted, setSubmitted] = useState(false);

    const { username, password } = inputs;

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setSubmitted(true);
        // if (username && password) {
        //     // get return url from location state or default to home page
        //     const { from } = location.state || { from: { pathname: "/" } };
        //     dispatch(userActions.login(username, password, from));
        // }

        var authApi = new AuthApi();
        const token = await authApi.getAccessToken(username, password);
        console.log("token: ", token)
        setToken(token);
    }

  return (
    <div className="col-lg-8 offset-lg-2">

    <h2>Login</h2>

    <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
            {submitted && !username &&
                <div className="invalid-feedback">Username is required</div>
            }
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
            {submitted && !password &&
                <div className="invalid-feedback">Password is required</div>
            }
        </div>
        <div className="form-group">
            <button className="btn btn-primary">
                Login
            </button>
            <Link to="/register" className="btn btn-link">Register</Link>
        </div>
    </form>
</div>
  );
}

export default Login
