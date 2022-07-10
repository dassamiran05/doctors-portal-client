import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section  style={{padding:'50px',background:`url(${appointment})`}}>
            <div className='text-center'>
                <h4 className="text-xl font-bold text-primary uppercase">Contact us</h4>
                <h2 className="text-3xl text-white">Stay connected with us</h2>
            </div>
            <div className='grid gap-4 w-6/12 my-5 mx-auto'>
                <input type="text" placeholder="name" className="input input-bordered w-full" />
                <input type="email" placeholder="email" className="input input-bordered w-full" />
                <textarea className="textarea textarea-bordered" placeholder="messages"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default Contact;