import React, { useEffect, useState } from 'react'
import CourseList from '../../public/CourseList.json'
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function FreeCourses() {
    // const filterFreeBook = CourseList.filter((curElem) =>{
    //    return curElem.category === "Free"
    // })

    const [course,setCourse] = useState([])
    useEffect(() =>{
        const getCourse =async()=>{
            try {
                const res = await axios.get("http://localhost:4002/course")
                console.log("Resp.", res);
                setCourse(res.data.filter((curElem) =>{
                  return curElem.category === "Free"
               }));
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCourse();
    },[])
    // console.log("Free Book is:",filterFreeBook);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
   <>
    <div className='max-w-screen-2xl container mx-auto md:px-5 px-4'>
       <div>
            <h1 className='text-semibold text-xl pb-2'>Free Offered Courses Available</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium nec sem ac efficitur. Sed laoreet maximus erat, quis convallis massa blandit et. Vivamus tincidunt, mi sit amet efficitur ultricies, quam nisl vehicula sapien, quis pretium leo mauris imperdiet nibh. In hendrerit ligula lacus, vel iaculis tellus efficitur non. Sed at quam id tortor placerat sagittis.
            </p>
        </div> 
        <div >
            <Slider {...settings}>
                {course.map((item) =>{
                    return <Cards items={item} key={item.id} />
                })}
            </Slider>
        </div>
    </div>
   </>
  )
}

export default FreeCourses
