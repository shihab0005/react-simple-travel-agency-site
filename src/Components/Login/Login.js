import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

import "./Login.css";

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const { signInUsingGoogle } = useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className="form-container p-5">
            <div >
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input

                        {...register("email", { required: true })}
                        placeholder='Enter Email'
                        type="email"
                    />
                    <input

                        {...register("password", { required: true })}
                        placeholder='Enter Password'
                        type="password"
                    />

                    <input type="submit" />
                </form>
                <p>As A New <Link to='/register'>Register</Link>
                </p>
                <div>---------------or--------------</div>
                <Button onClick={handleGoogleLogin} className="" variant="primary">Sign in with Google</Button>
            </div>
        </div>

    );
};

export default Login;