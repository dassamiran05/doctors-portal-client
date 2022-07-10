import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    // const [services, setServices] = useState([]);

    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    const {data: services, refetch} = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )

    // useEffect(() => {
    //     fetch('http://localhost:5000/service')
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }, [formattedDate]);
    return (
        <div className='my-5'>
            <h4 className="text-xl font-bold text-secondary text-center mb-4">Available Appoinments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services?.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    >
                    </Service>)
                }
            </div>
            {treatment && <BookingModal date={date} refetch={refetch} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;