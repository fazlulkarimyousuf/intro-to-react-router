import React from 'react';
import {useLoaderData} from 'react-router';
import Users from '../Users/Users';
// import 
// import Users from '../Users/Users';

const UserDetails = () => {
    const user = useLoaderData();


    const {website,name} = Users;
    return (
        <div>
            <h3>User Details here</h3>
            <h5>Name: {name}</h5>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;
// UserDetails