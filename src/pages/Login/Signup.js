import React from 'react';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    let signinError;

    if(loading || loading2 || updating){
        return <button className='btn loading'>loading</button>
    }

    if(error || error2 || updateError){
        signinError = <p className='text-red-500'>{error?.message || error2?.message || updateError?.message}</p>
    }
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName:data.name});
        alert("Data Updated");
        navigate('/appointment');
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Signup</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Your Name" 
                        class="input input-bordered w-full max-w-xs" 
                        {...register("name",{
                            required: {
                                value:true,
                                message:'Enter your name here'
                            }
                        })}
                        />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input 
                        type="email" 
                        placeholder="Your Email" 
                        class="input input-bordered w-full max-w-xs" 
                        {...register("email",{
                            required: {
                                value:true,
                                message:'Email is Required'
                            },
                            pattern: {
                            value: /[A-Za-z]{3}/,
                            message: 'error message'
                            }
                        })}
                        />
                        <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input 
                        type="password" 
                        placeholder="Your Password" 
                        class="input input-bordered w-full max-w-xs" 
                        {...register("password",{
                            required: {
                                value:true,
                                message:'Password is Required'
                            },
                            minLength: {
                            value: 6,
                            message: 'Must be 6 characters or longer'
                            }
                        })}
                        />
                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                        {signinError}
                        <input className="btn w-full max-w-xs text-white" type="submit" value="Signup" />
                        
                    </form>
                    <p>Already have an account <Link className="text-primary" to="/login">Login here</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;