import React from 'react'
import Navbar from '../Components/Navbar'
import Courses from '../Components/Course/Courses'
import Footer from '../Components/Footer'

const PaidCoures = () => {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
        <Courses />
    </div>
    <Footer />
    </>
  )
}

export default PaidCoures
