import React, { useState } from "react";
import './Login.css'

function Login() {
    const [isVisible, setIsVisible] = useState(false);


    return (
        <div className="parent">
            <div className="wrapper">
                <h2>Login</h2>
                <form action="#">
                    <div className="input-box">
                        <input type="text" placeholder="Enter your email" required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Create password" required />
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