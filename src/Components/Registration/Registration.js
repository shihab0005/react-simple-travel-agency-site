import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Registration.css'
import axios from "axios"
const Registration = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post("http://localhost:5000/users", data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert("Registration Successfully Done");
                    reset();
                }
            })
    };

    return (
        <div className="registration_container">
            <div>
                <h1>Registration Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name", { required: true })}
                        placeholder="Name"
                    />
                    <input
                        {...register("address", { required: true })}
                        placeholder="Address"
                    />
                    <input
                        {...register("email", { required: true })}
                        placeholder="Email"
                        type="email"
                    />
                    <input
                        {...register("password", { required: true })}
                        placeholder="Password"
                        type="password"
                    />
                    <input
                        {...register("phone", { required: true })}
                        placeholder="Phone"

                    />
                    <input
                        {...register("occupation", { required: true })}
                        placeholder="Occupation"

                    />

                    <input
                        type="submit"
                    />
                </form>
                <p>Already Have An Account ? <Link to="/login">Login</Link></p>
            </div>
        </div>

    );
};

export default Registration;