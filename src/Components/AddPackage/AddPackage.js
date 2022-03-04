import React from 'react';
import './AddPackage.css'
import axios from 'axios'
import { useForm } from "react-hook-form";

const AddPackage = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post("https://floating-plains-57094.herokuapp.com/addPackage", data)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    alert("Package Insert Successfully");
                    reset();
                }
            })
    };

    return (
        <div className=''>
            <h3>Add Package</h3>
            <div className="form_container">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder='Enter Package Name'
                        {...register("ppackageName", { required: true })}
                    />
                    <input
                        placeholder='Enter location Name'
                        {...register("plocation", { required: true })}
                    />
                    <input
                        placeholder='Enter duration'
                        {...register("pduration", { required: true })}
                    />
                    <input
                        placeholder='Enter tourType Name'
                        {...register("ptourType", { required: true })}
                    />
                    <input
                        type="number"
                        placeholder='Enter maxGroupSize Name'
                        {...register("pmaxGroupSize", { required: true })}
                    />
                    <input
                        type="date"
                        placeholder='Enter Date'
                        {...register("pdate", { required: true })}
                    />
                    <input
                        type="number"
                        placeholder='Enter Amount'
                        {...register("pcost", { required: true })}
                    />
                    <input
                        placeholder='Enter foodMenu'
                        {...register("pfoodMenu", { required: true })}
                    />
                    <input
                        placeholder='Enter Image url'
                        {...register("pimageCard", { required: true })}
                    />

                    <input type="submit" />
                </form>

            </div>

        </div>
    );

}
export default AddPackage;