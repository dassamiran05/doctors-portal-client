import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({date, treatment, setTreatment, refetch}) => {
    const {_id, name, slots, price} = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');
    // console.log(formattedDate);
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        // console.log(_id, name, slot);

        const booking = {
            treatmentId:_id,
            treatment:name,
            date:formattedDate,
            slot,
            price,
            patient:user.email,
            patientName:user.displayName,
            phone:event.target.phone.value
        }
        

        fetch('http://localhost:5000/booking', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.success){
                toast(`Appointment is set, ${formattedDate} at ${slot}`);
            } else {
                toast.error(`You already have an appointment, ${data.booking?.date} at ${data.booking?.slot}`);
            }
            //To close the modal
            refetch();
            setTreatment(null);
        })

        
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for {name}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-3 justify-items-center' onSubmit={handleBooking}>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" autocomplete="off" placeholder="Your Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-secondary text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;