import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegWindowClose } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';


const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="bg-lime-200">
            <div className="max-w-[1240px] mx-auto px-3 flex justify-between py-3 items-center">
                <div>
                    <h1>LOGO</h1>
                </div>
                
                    <span className="md:hidden">
                        {
                            toggle ? <FaRegWindowClose onClick={() => setToggle(!toggle)}/> : <GiHamburgerMenu onClick={() => setToggle(!toggle)}/>
                        }
                    </span>

                <ul className={`flex gap-6 items-center duration-300 z-50 flex-col py-5 md:p-0 text-white bg-opacity-90 md:text-black font-semibold top-[7%] bg-black md:bg-transparent w-full md:w-auto md:flex-row absolute md:static ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">Order</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">LogIn</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;