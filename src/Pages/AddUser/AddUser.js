import { jsonEval } from '@firebase/util';
import React from 'react';
import { useForm } from "react-hook-form";

const AddUser = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = 'http://localhost:5000/service'
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
        
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Add User</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' placeholder=' Your name' {...register("name", { required: true, maxLength: 20 })} />

                <textarea className='mb-2' placeholder='Your text' {...register("description")} />

                <input className='mb-2' placeholder='price' type="number" {...register("price")} />

                <input className='mb-2' placeholder='Photourl' type="text" {...register("img")} />

                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddUser;