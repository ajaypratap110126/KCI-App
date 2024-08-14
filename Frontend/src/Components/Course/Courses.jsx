import React, { useEffect, useState } from 'react'
// import CourseList from '../../../public/CourseList.json'
import Cards from '../Cards'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Courses = () => {
    const [course,setCourse] = useState([])
    useEffect(() =>{
        const getCourse =async()=>{
            try {
                const res = await axios.get("http://localhost:4002/course")
                setCourse(res.data);
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCourse();
    },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>
                We 're delighted to have you {" "}
                <span className='text-pink-500'>
                    Here! :)
                </span>
            </h1>
            <p className='mt-12'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
            <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
                Back
            </button>
            </Link>
        </div>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-4'>
            {
                course.map((item)=>{ 
                    console.log("Items?",item);
                    return <Cards  items={item} key={item.id} />
                })
            }
            
        </div>
    </div>
    </>
  )
}

export default Courses
