import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Register() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate  = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/register', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    if (data.success === false){
      setLoading(false);
      setError(data.message);
      return;
    }
    setLoading(false);
    setError(null);
    navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
    console.log(data);
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-700 via-cyan-500 to-cyan-200 flex items-center justify-center">
      <div className='bg-gray-700 p-8 rounded-lg shadow-2xl w-full max-w-md'>
      <h1 className='text-3xl text-center font-semibold  text-white my-7'>Register</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' 
        className='border p-3 rounded-lg' id='username' onChange={handleChange} />
        <input type='date' placeholder='Date of Birth' 
        className='border p-3 rounded-lg' id='dob' onChange={handleChange} />
        <input type='email' placeholder='Email' 
        className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type='password' placeholder='Password' 
        className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-500 text-white 
        p-3  rounded-lg uppercase hover:opacity-95 
        disabled:opacity-80'>{loading? 'Loading...' : 'Register'}</button>
      </form>
      <div className='flex gap-2 mt-5  text-white'>
        <p>Already have an account?</p>
        <Link to='/'>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
    </div>
  )
}
