import React from 'react'
import Home from './Components/Home/Home.jsx';
import {Navigate, Route,Routes} from 'react-router-dom'
import Courses from './Components/Course/Courses.jsx';
import PaidCoures from './PaidCourses/PaidCoures.jsx';
import Signup from './Components/Signup.jsx';
import Login from './Components/Login.jsx';
import { useAuth } from './Components/context/AuthProvider.jsx';
import Contact from './Components/Contact.jsx';

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log("Auth:", authUser);
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/course" element={authUser? <PaidCoures /> : <Navigate to="/signup" />}/>
        {/* <Route path="/login" element={<Login />}/> */}
        <Route path="/contact" element={<Contact />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </div>
    
      
    </>
  )
}

export default App
