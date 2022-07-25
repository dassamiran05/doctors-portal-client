import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor, index, refetch}) => {
    const {name, speciality, img, email} = doctor;

    const handleDelete = email =>{
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            if(data){
                toast.success(`Doctors: ${name} deleted successfully`);
                refetch();
            }
        })
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td>
                <div class="avatar">
                    <div class="w-8 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td><button className='btn btn-xs btn-error' onClick={() => handleDelete(email)}>Delete</button></td>
        </tr>
    );
};

export default DoctorRow;