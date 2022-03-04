import React from 'react';
import { useForm } from "react-hook-form";
import './Experts.css'
const Experts = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='container expert_container'>
            <div className="">
                <h2 style={{ fontWeight: "bolder", fontSize: "28px", color: "white" }}>Get The Best Holiday Paln By Expert</h2>
                <span style={{ color: "white", textAlign: "left" }}>You can also call us or contact us through mail</span>
                <div className="phone d-flex ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" style={{ width: "30px", color: "white" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <h4 style={{ color: "white" }}>+001888099887</h4>
                </div>
                <div className="mail d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" style={{ width: "30px", color: "white" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h4 style={{ color: "white" }}>BD_TOURE_EXPERTS@GMAIL.COM</h4>
                </div>
            </div>
            <div className="input_box">
                <div className="">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            placeholder='Enter Name'
                            {...register("name", { required: true })}
                        />
                        <input
                            placeholder='Enter Email'
                            {...register("email", { required: true })} />

                        <input type="submit" value="GEt Quote" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Experts;