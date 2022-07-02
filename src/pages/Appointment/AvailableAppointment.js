import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div className='my-5 text-center'>
            <h4 className="text-xl uppercase font-bold text-primary">Available Appoinments on {format(date, 'PP')}</h4>
        </div>
    );
};

export default AvailableAppointment;