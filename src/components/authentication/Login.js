import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function Login(){
    const [user, setUser] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    
    const handleLogin = () => {
        login(user);
        navigate('/');
    };
    return(
        <div>
            <label>
                username : 
                <input type="text" onChange={(e) => setUser(e.target.value)}/>
            </label>
            <button onClick={handleLogin}>로그인</button>
        </div>
    );
}

export default Login;