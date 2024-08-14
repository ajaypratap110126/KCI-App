import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
// import toast from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4002/user/login", userInfo)
    .then((res) =>{
      console.log(res.data);
      if(res.data){
        // setTimeout(() =>{
        //   toast.success('Loggedin Successfully!');
        //   alert("Loggedin Successfully!")
        // },3000)
        document.getElementById('my_modal_3').close();
        toast.success('Loggedin Successfully!');
        alert('Loggedin Successfully!');
        window.location.reload();
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    })
    .catch((err)=>{
      if(err.response){
        console.log("err",err);
        alert("Hlo Error:",err.response.data.message);
        toast.error("Hlo Error:",err.response.data.message);
      }
    })
} 
  return (
    <>
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button> */}
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog ">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=>{document.getElementById('my_modal_3').close()}}
            >✕</Link>
            
            <h3 className="font-bold text-lg">Welcome on Login Popup!</h3>
            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input type='email' placeholder='Enter your user_id' 
              className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
              {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>Email field is required</span>}
              <br />
              {/* Password */}
              <span>Password</span>
              <br />
              <input type='Password' placeholder='Enter your Password' 
              className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
              {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className='text-sm text-red-500'>Password field is required</span>}
            </div>
            
            <div className='flex justify-between mt-4'>
              <button type='submit' className='bg-pink-500 text-white rounded-md px-5 py-2'>Login</button>
              <p>
                Not Registered?<Link to="/signup" className='underline text-blue-600 cursor-pointer'
                >Signup</Link>
              </p>
            </div>
            </form>
        </div>
        </dialog>
        <ToastContainer />
    </div>
    </>
  )
}

export default Login
