import React from 'react';

const Login = () => {
    return (
        <div className="mt-20">
            <div className="w-[700px] mx-auto mt-10 border bg-slate-300 p-6 rounded-md">
                <label htmlFor="">Email</label> <br />
                <input className="w-full p-3 mb-3 rounded-md bg-transparent border" type="email" name='email' placeholder='Email' /> <br />
                <label htmlFor="">Password</label><br />
                <input className="w-full p-3 mb-3 rounded-md bg-transparent border" type="password" name='password' placeholder='Password' /><br />
                <button className='block mx-auto rounded-md w-full bg-green-600 p-3'>Login</button>
            </div>
        </div>
    );
};

export default Login;