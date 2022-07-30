import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor, index, refetch, setDeletingDoctor}) => {
    const {name, speciality, img, email} = doctor;

    // const handleDelete = email =>{
    //     fetch(`http://localhost:5000/doctor/${email}`, {
    //         method: 'DELETE',
    //         headers:{
    //             authorization:`Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data){
    //             toast.success(`Doctors: ${name} deleted successfully`);
    //             refetch();
    //         }
    //     })
    // }
    return (
        <tr>
            <th>{index+1}</th>
            <td>
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                {/* <button className='btn btn-xs btn-error' onClick={() => handleDelete(email)}>Delete</button> */}
            </td>
        </tr>
    );
};

export default DoctorRow;