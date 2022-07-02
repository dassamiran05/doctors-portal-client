import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <div className='flex justify-center items-center' style={{background:`url(${appointment})`}}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-4xl text-white'>Make an Appointment today</h2>
                <p className='text-white mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <PrimaryButton>Make Appointment</PrimaryButton>
            </div>
        </div>
    );
};

export default MakeAppointment;