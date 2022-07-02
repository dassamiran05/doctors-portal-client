import React from 'react';

const Service = (props) => {
    const {_id, name, description, img} = props.service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{name}</h2>
            <p>{description}</p>
            {/* <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
            </div> */}
        </div>
        </div>
    );
};

export default Service;