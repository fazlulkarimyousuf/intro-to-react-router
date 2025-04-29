import React from 'react';
import './User.css';
import {Link} from 'react-router';


const User = ({user}) => {
    const {id,name, email, phone,} = user;

    // const userStyle = {
    //    border: '2px solid yellow',
    //    borderRadius: '20px',
    //      margin: '10px',
    //         padding: '10px',
    // }

    

    return (
        <div className='card'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            {/* <button  className='button' >Contuc Us</button> */}
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;