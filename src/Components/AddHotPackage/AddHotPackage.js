import React from 'react';
import { useForm } from "react-hook-form";
import './AddHotPackage.css'
import axios from 'axios'

const AddHotPackage = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


        axios.post("https://floating-plains-57094.herokuapp.com/addHotPackage", data)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    alert("Hot Package Insert Successfully");
                    reset();
                }
            })

    };

    return (
        <div className=''>
            <h3>Add Hot Package</h3>
            <div className="form_container">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder='Enter Package Name'
                        {...register("hpname", { required: true })}
                    />
                    <input
                        placeholder='Enter location Name'
                        {...register("hplocation", { required: true })}
                    />
                    <input
                        placeholder='Enter duration'
                        {...register("hpduration", { required: true })}
                    />
                    <input
                        placeholder='Enter tourType Name'
                        {...register("hptourType", { required: true })}
                    />
                    <input
                        type="number"
                        placeholder='Enter maxGroupSize Name'
                        {...register("hpmaxGroupSize", { required: true })}
                    />
                    <input
                        type="date"
                        placeholder='Enter Date'
                        {...register("hpdate", { required: true })}
                    />
                    <input
                        type="number"
                        placeholder='Enter Amount'
                        {...register("hpcost", { required: true })}
                    />
                    <input
                        placeholder='Enter foodMenu'
                        {...register("hpfoodMenu", { required: true })}
                    />
                    <input
                        placeholder='Enter Image url'
                        {...register("hpimageCard", { required: true })}
                    />

                    <input type="submit" />
                </form>

            </div>

        </div>
    );
};

export default AddHotPackage;