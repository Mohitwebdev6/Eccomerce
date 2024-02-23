import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaTableCellsLarge,FaPhone,FaHouse,FaXmark, FaCartShopping, FaUser, FaMagnifyingGlass, FaBars, FaEllipsisVertical, FaU } from "react-icons/fa6";
import './Header.css'
import { useState } from "react";

export default function Header() {
    let [show, setShow] = useState(true)
    let showNav = () => {
        let nav = document.querySelector("nav")
        if (show) {
            nav.classList.add("translate-x-0")
            setShow(!show)
        }
    }
    let notShowMenu = () => {
        if (!show) {
            let nav = document.querySelector("nav")
            nav.classList.remove("translate-x-0")
            setShow(!show)
        }
    }
    return (
        <>
            <header className="fixed top-0">
                <div className="flex justify-between items-center z-10  p-3 flex-wrap pr-6 bg-slate-200 w-lvw">
                    <div className=" p-2 flex text-xl items-center gap-3">
                        <button className="sm:hidden" onClick={showNav} ><FaBars /></button>
                        <h3 className=" font-extrabold text-red-600"><b>Shop Shee</b></h3>
                    </div>
                    <nav className="top-0 w-4/5 left-0 sm:static sm:flex p-4  sm:p-2 absolute h-lvh sm:h-max sm:justify-between sm:w-1/3 z-10 font-semibold bg-slate-200 ">
                        <div className="flex  justify-center flex-col items-center my-8 sm:hidden"><FaUser className=" text-4xl" /> <p>Login/sign-up</p> </div>
                        <NavLink to="/" onClick={notShowMenu}  className={({isActive})=>` mr-2 flex items-center sm:mb-0 mb-8 gap-3 ${isActive?"text-blue-500":""}`}><FaHouse/> Home</NavLink>
                        <div className="sm:hidden absolute right-0 top-0 p-4 text-2xl" onClick={notShowMenu}><FaXmark /></div>
                        <NavLink to="/" onClick={notShowMenu} className="mr-2 flex items-center mb-8 sm:mb-0 gap-3"><FaTableCellsLarge/> Categories</NavLink>
                        <NavLink to="/" onClick={notShowMenu} className="mr-2 flex items-center mb-8 sm:mb-0 gap-3"><FaPhone/> Contact</NavLink>
                    </nav>
                    <div className="search flex sm:w-2/5 w-full items-center order-2">
                        <input type="text" className="p-1 text-xl w-11/12 sm:h-10 outline-none rounded-l-lg pl-4 " placeholder="search" />
                        <button className="sm:p-3 p-2 text-xl sm:text-lg rounded-r-lg text-white  bg-blue-600"><FaMagnifyingGlass /></button>
                    </div>
                    <div className="flex gap-10 p-2 order-1 sm:order-3 ">
                        <div className="log-in">
                            <div to="/login" className=" text-xl"><FaUser /></div>
                        </div>
                        <div className="cart">
                            <Link to="/cart" className="text-xl"><FaCartShopping></FaCartShopping></Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
