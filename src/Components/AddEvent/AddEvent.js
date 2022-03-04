import React from 'react';
import { useForm } from "react-hook-form";
import './AddEvent.css'
import axios from 'axios'
const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        // fetch("http://localhost:5000/addEvent", {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(data),
        // }).then(res => res.json())
        //     .then(result => console.log(result))
        axios.post("https://floating-plains-57094.herokuapp.com/addEvent", data)
            .then(res => {

                if (res.data.insertedId) {
                    alert("Event Insert Successfully")
                    reset();
                }
            })
    };
    return (
        <div className=''>
            <h3>Add Event</h3>
            <div className="form_container">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder='Enter Package Name'
                        {...register("epackageName", { required: true })}
                    />
                    <input
                        placeholder='Enter location Name'
                        {...register("elocation", { required: true })}
                    />
                    <input
                        placeholder='Enter duration'
                        {...register("eduration", { required: true })}
                    />
                    <input
                        placeholder='Enter tourType Name'
                        {...register("etourType", { required: true })}
                    />
                    <input
                        type="number"
                        placeholder='Enter maxGroupSize Name'
                        {...register("emaxGroupSize", { required: true })}
                    />
                    <input
                        type="date"
                        placeholder='Enter Date'
                        {...register("edate", { required: true })}
                    />
                    <input
                        type="number"
                        placeholder='Enter Amount'
                        {...register("ecost", { required: true })}
                    />
                    <input
                        placeholder='Enter foodMenu'
                        {...register("efoodMenu", { required: true })}
                    />
                    <input
                        placeholder='Enter Image url'
                        {...register("eimageCard", { required: true })}
                    />

                    <input type="submit" />
                </form>

            </div>

        </div>
    );
};

export default AddEvent;