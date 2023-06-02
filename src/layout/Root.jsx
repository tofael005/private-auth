import React from 'react';
import NavBar from '../Header/NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <NavBar />
            <div className="max-w-[1240px] mx-auto">
                <Outlet />
            </div>

        </div>
    );
};

export default Root;