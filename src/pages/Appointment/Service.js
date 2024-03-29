import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({service, setTreatment}) => {
    const {name, slots, price} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slots Available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                <label htmlFor="booking-modal" className="btn  text-white bg-gradient-to-r from-secondary to-primary" disabled={slots.length === 0} onClick={() => setTreatment(service)}>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;