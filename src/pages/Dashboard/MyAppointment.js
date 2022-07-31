import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointment] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`,{
                method:'GET',
                headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                if(res.status === 401 || res.status === 403 ){
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()})
            .then(data =>setAppointment(data));
        }
    },[user])
    return (
        <div>
            <h2>My Appointments: {appointments.length}</h2>
            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appoint, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{appoint.patientName}</td>
                            <td>{appoint.date}</td>
                            <td>{appoint.slot}</td>
                            <td>{appoint.treatment}</td>
                            <td>
                                {(appoint.price && !appoint.paid) && <Link to={`/dashboard/payment/${appoint._id}`}><button className='btn btn-xs'>Pay ${appoint.price}</button></Link>}
                                {(appoint.price && appoint.paid) && <span className='text-success'>Paid</span>}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyAppointment;