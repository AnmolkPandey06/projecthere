import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const PatientLogin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', formData);
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Registration failed:', error); // Handle error
    }
  };

  return (<>
  
   <div>
   <div className='text-center'>
    <h1 className='font-bold text-4xl'>Admin Login</h1>
  </div>
    <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Your Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="********"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Register
      </button>
      <Link to="/">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        
      >
        Home
      </button>
      </Link>
     
    </div>
  </form></div>
  </>
   
  )
}

export default PatientLogin