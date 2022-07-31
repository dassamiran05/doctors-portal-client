import React from 'react';
import { useQuery} from 'react-query';
import { useParams } from 'react-router-dom';
import PrimaryButton from '../Shared/PrimaryButton';

const Payment = () => {
    const {id} = useParams(); 
    const url = `http://localhost:5000/booking/${id}`;
    const {data:appointment, isLoading} = useQuery(['booking', id], () =>fetch(url, {
        method:'GET',
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));

    if(isLoading){
        return <PrimaryButton></PrimaryButton>;
    }

    return (
        <div>
                <div class="card w-50 max-w-md bg-base-100 shadow-xl my-5">
                    <div class="card-body">
                        {/* <p className="text-success">Hello, {appointment.patientName}</p> */}
                        <h2 class="card-title"> Pay for {appointment.treatment}</h2>
                        <p>Your appointment on {appointment.date} at {appointment.slot}</p>
                        {/* <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                        </div> stripe password: !@S@m321#das */}
                        <p>Please pay the price : {appointment.price}</p>
                    </div>
                </div>
                    <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">
                            
                        </div>
                    </div>
        </div>
    );
};

export default Payment;