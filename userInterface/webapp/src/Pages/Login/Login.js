import React, { useEffect, useState } from "react";
import './Login.css'

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
        <div className="parent">
            <div className="wrapper">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-box">
                        <input type="text" 
                               placeholder="Enter your email" 
                               value={formData?.userName} 
                               name="userName"
                               onChange={handleChangeData}/>
                    </div>
                    <div className="input-box">
                        <input type="password" 
                               placeholder="Create password" 
                               value={formData.password}
                               name="password"
                               onChange={handleChangeData} />
                    </div>
                    <div className="input-box button">
                        <input type="Submit" value="Sign In" />
                    </div>
        
                </form>

            </div>
        </div>

    )
}

export default Login