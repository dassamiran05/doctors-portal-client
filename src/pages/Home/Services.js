import React from 'react';
import flouride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import teeth from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import Service from './Service';
import PrimaryButton from '../Shared/PrimaryButton';


const Services = () => {
    const services = [
        {
            _id:1,
            name:'Floride Treatment',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img:flouride
        },
        {
            _id:2,
            name:'Cavity Fitting',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img:cavity
        },
        {
            _id:3,
            name:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img:teeth
        }
    ];
    return (
        <div className='my-28'>
            <div className="text-center">
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services we provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {services.map(service => <Service key={service._id} service={service}></Service>)}
            </div>
            <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl"/>
                    <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;