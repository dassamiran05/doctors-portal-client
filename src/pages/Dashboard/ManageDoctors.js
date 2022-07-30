import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    // const [doctors,setDoctors] = useState([]);
    const [deletingDoctor, setDeletingDoctor] = useState(null);
   
    const {data: doctors, isLoading, refetch} = useQuery('doctors', () =>
        fetch('http://localhost:5000/doctor',{
            method:'GET',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
    )
    if(isLoading){
        return <button className='btn loading'>loading</button>;
    }
    return (
        <div>
            <h2 className="text-2xl">Manage the Doctor:{doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) =><DoctorRow key={doctor._id} index={index} doctor={doctor} refetch={refetch} setDeletingDoctor={setDeletingDoctor}></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <DeleteConfirmModal deletingDoctor={deletingDoctor} refetch={refetch} setDeletingDoctor={setDeletingDoctor}></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageDoctors;