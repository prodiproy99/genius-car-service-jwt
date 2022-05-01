import React from 'react';
import { useParams } from 'react-router-dom'
import useServiceDetail from '../../../hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios'; 
import { toast } from 'react-toastify';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId)
    const [user] = useAuthState(auth);
    const handlePlaceOrder = e =>{
        e.preventDefault()
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value

        }

        axios.post('http://localhost:5000/order', order)
        .then (res =>{
            const {data} = res;
            if(data.insertedId){
                toast('Your order is booked');
                e.target.reset();
            }
        })
        
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Checkout: {service.name}</h2>

            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' value={user?.displayName} type="text" name='name' placeholder='Your name' required readOnly disabled/>
                <input className='w-100 mb-2' value={user?.email} type="email" name='email' placeholder='Your email' required readOnly disabled/>
                <input className='w-100 mb-2' value={service.name} type="text" name='service' placeholder='Your service' required readOnly/>
                <input className='w-100 mb-2' value={user?.address} type="text" name='address' placeholder='Your address' required autoComplete='off'/>
                <input className='w-100 mb-2' value={user?.phoneNumber} type="text" name='phone' placeholder='Your phone number' required />
                <input className='btn btn-primary' type = 'submit' value='Place Order'></input>
            </form>
        </div>
    );
};

export default Checkout;