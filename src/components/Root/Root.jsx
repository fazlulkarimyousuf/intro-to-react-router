import React from 'react';
import Header from '../Header/Header';
import {Outlet} from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
// import './Root.css';
import './Root.css'

const Root = () => {
    return (
        <div className='root-main'>
            <Header></Header>
            <div >
                <SideBar></SideBar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;