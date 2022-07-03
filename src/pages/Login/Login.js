import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);

    console.log(user);
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

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
                            {errors.password?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                        
                        <input className="btn w-full max-w-xs text-white" type="submit" value="Login" />
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;