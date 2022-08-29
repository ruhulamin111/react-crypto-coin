import React from 'react';
import { NavLink } from "react-router-dom";


const Header = () => {
    const style = ({ isActive }) => {
        return {
            color: isActive ? 'green' : '',
            border: isActive ? '1px solid gray' : '',
        }
    }

    return (
        <div className='w-11/12 mx-auto h-12'>
            <nav className='flex justify-between items-center mt-4 '>
                <div className='text-2xl font-bold' >
                    <NavLink className='p-2 ' to='/'>Crypto Coins</NavLink>
                </div>
                <div className='text-xl'>
                    <NavLink className='ml-10 p-2 rounded-lg' style={style} to='/home'>Home</NavLink>
                    <NavLink className='ml-10 p-2 rounded-lg' style={style} to='/coins'>Coins</NavLink>
                    <NavLink className='ml-10 p-2 rounded-lg' style={style} to='/about'>About</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;