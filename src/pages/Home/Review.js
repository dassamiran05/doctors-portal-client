import React from 'react';

const SingleReview = ({review}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                {/* <h2 class="card-title">{review.name}</h2> */}
                <p>{review.review}</p>
                <div className="flex mt-3 items-center">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl">{review.name}</h4>
                        <p> {review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;