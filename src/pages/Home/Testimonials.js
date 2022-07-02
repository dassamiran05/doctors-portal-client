import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name:'Brock Lesner',
            review:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            location:'California',
            img:people1
        },
        {
            _id:2,
            name:'John cena',
            review:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            location:'Gujrat',
            img:people2
        },
        {
            _id:3,
            name:'Bill Goldberg',
            review:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            location:'London',
            img:people3
        }
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className="text-3xl">What our Patients say</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
            
        </section>
    );
};

export default Testimonials;