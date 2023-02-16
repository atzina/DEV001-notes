import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../firebase';

function Wall() {
    const navigate = useNavigate();
    const handlesSignOut = async () => {
        await logOut();
        navigate('/')
    };
    return <div>
       <h2>wall</h2> 
    <button onClick={handlesSignOut}>Log Out</button>
    </div>
}

export default Wall;