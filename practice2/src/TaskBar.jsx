import React from "react";
import './Taskbar.css';
function Taskbar(){
    return (
    <div className="navbar">
        <h1 className="logo">Logo</h1>
        <ul className="list1">
            <li>Home</li>
             <li>About</li>
            <li>Contacts</li>
            <li>Sign in</li>
            <li>Profile</li>
        </ul>
    </div>
    );  
}
export default Taskbar;