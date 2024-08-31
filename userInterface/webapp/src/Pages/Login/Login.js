import React, { useEffect, useState } from "react";
// import './Login.css'

function Login() {
    const [formData, setFormData] = useState({
        userName:'',
        password:''
    });

    const handleChangeData=(e)=>{
        const {name,value} = e.target
        setFormData((prevFormData)=>({
            ...prevFormData,
            [name]:value
        }))
    }

    const handleLogin= async(e)=>{
        e.preventDefault();
        try{
            let payload ={
                username:formData?.userName,
                password:formData?.password
            }
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const result = await response.json();
            console.log('Success:', result);

        }catch(error){
            console.log(error)
        }
        
    }

    useEffect(()=>{
        console.log(formData)
    },[formData])


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="text"
                id="text"
                name="userName"
                value={formData.userName}
                onChange={handleChangeData}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChangeData}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
}

export default Login