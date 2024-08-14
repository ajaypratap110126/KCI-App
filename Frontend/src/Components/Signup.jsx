import React from 'react'
import Login from './Login'
import { Link, json } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =async (data) => {
      const userInfo = {
        fullname:data.fullname,
        email:data.email,
        password:data.password
      }
      await axios.post("http://localhost:4002/user/signup", userInfo)
      .then((res) =>{
        console.log(res.data);
        if(res.data){
          // alert("Signup Successfully!")
          toast.success('Signup Successfully!')
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      })
      .catch((err)=>{
        if(err.response){
          console.log("err",err);
          alert("Hlo Error:",err.response.data.message);
          toast.error("Hlo Error:",err.response.data.message)
        }
      })
    }
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <div className="w-[600px] ">
        <div className="modal-box dark:bg-slate-900 dark:text-white border-[5px] rounded dark: border rounded">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog ">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
           
            <h3 className="font-bold text-lg">Welcome on Signup Page!</h3>
           
            <div className='mt-4 space-y-2'>
                 {/* Username */}
              <span>Full name</span>
              <br />
              <input type='text' name='fullname' placeholder='Enter your full name' 
              className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
              {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && <span className='text-sm text-red-500'>full_name field is required</span>}
              <br />
               {/* Email */}
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
              <br />
              {/* Password */}
              <span>Confirm_Password</span>
              <br />
              <input type='Password' name="confirm_password" placeholder='Enter your Password' 
              className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
              {...register("confirm_password", { required: true })}
              />
              <br />
              {errors.confirm_password && <span className='text-sm text-red-500'>confirm_password field is required</span>}
              <br />
            </div>
            <div className='flex justify-between mt-4'>
              <button className='bg-pink-500 text-white rounded-md px-5 py-2'>Signup</button>
              <p>
                If you already Registered Pls.?
                <button className='underline text-blue-600 cursor-pointer'
                onClick={() => 
                document.getElementById('my_modal_3').showModal()
                }
                >
                 <Link to="/">
                 Login
                  </Link> 
                </button>
                <Login />
              </p>
            </div>
            </form>
        </div>
        </div>
        </div>
    </>
  )
}

export default Signup
