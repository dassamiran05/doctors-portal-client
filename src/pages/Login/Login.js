import React, { useEffect } from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
      ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user1 || user2);


    let from = location.state?.from?.pathname || "/";
    
    useEffect(() =>{
        if(token){
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    let signinError;

    if(loading1 || loading2){
        return <button className='btn loading'>loading</button>
    }

    if(error1 || error2){
        signinError = <p className='text-red-500'>{error1?.message || error2?.message}</p>
    }

    
    
    
    const onSubmit = (data) => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    // console.log(user);
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="input input-bordered w-full max-w-xs" 
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
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input 
                        type="password" 
                        placeholder="Your Password" 
                        className="input input-bordered w-full max-w-xs" 
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
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                        {signinError}
                        <input className="btn w-full max-w-xs text-white" type="submit" value="Login" />
                        
                    </form>
                    <p>New to Doctors portal <Link className="text-primary" to="/signup">Create new Account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;