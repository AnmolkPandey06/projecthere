import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div><div className="text-center mt-8">
    <h1 className="text-3xl font-bold mb-6">Welcome to My App!</h1>
    
    
    <div className="flex justify-evenly m-3">
    <h1 className="text-2xl font-semibold m-2">Admin Side</h1>
    <Link to='/admin/register'>
    <button className="rounded-lg bg-blue-400 text-white p-2">Admin Register</button> 
    </Link>
    <Link to='/admin/login'>
    <button className="rounded-lg bg-blue-400 text-white p-2">Admin login</button> 
    </Link>
    </div>


    <div className="flex justify-evenly m-3">
    <h1 className="text-2xl font-semibold m-2">Doctor Side</h1>
    <Link to='/doctor/register'>
    <button className="rounded-lg bg-blue-400 text-white p-2">Doctor Register</button> 
    </Link>
    <Link to='/doctor/login'>
    <button className="rounded-lg bg-blue-400 text-white p-2">Doctor login</button> 
    </Link>
    </div>
      

    <div className="flex justify-evenly m-3">
    <h1 className="text-2xl font-semibold m-2">Nurse Side</h1>
    <Link to='/nurse/register'>
    <button className="rounded-lg bg-blue-400 text-white p-2">Nurse Register</button> 
    </Link>
    <Link to='/nurse/login'>
    <button className="rounded-lg bg-blue-400 text-white p-2">Nurse login</button> 
    </Link>
    </div>


    <div className="flex justify-evenly m-3">
    <h1 className="text-2xl font-semibold m-2">Patient Side</h1>
    <Link to='/patient/register'>
    <button className="rounded-lg bg-blue-400 text-white p-2">Patient Register</button> 
    </Link>
    <Link to='/patient/login'>
    <button className="rounded-lg bg-blue-400 text-white p-2">Patient login</button> 
    </Link>
    </div>


  </div></div>
  )
}

export default Home