import { FaBook, FaEnvelope, FaShoppingCart,  FaUsers, FaUtensils } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHome, IoRestaurant } from "react-icons/io5";
import { MdFormatListBulleted } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../hooks/UseAdmin";

const Dashboard = () => {
    // todo 
    const [isAdmin] = UseAdmin ();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu ">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaShoppingCart></FaShoppingCart>
                                    Admin Home</NavLink> </li>
                            <li> <NavLink to="/dashboard/addItems">
                                <FaUtensils></FaUtensils>
                                Add items</NavLink> </li>
                            <li> <NavLink to="/dashboard/manageItems">
                                <MdFormatListBulleted className="" />
                                Manage items</NavLink> </li>
                            <li> <NavLink to="/dashboard/manageBookings">
                                <FaBook />
                                Manage bookings</NavLink> </li>
                            <li> <NavLink to="/dashboard/users">
                                <FaUsers></FaUsers>
                                All Users</NavLink> </li>
                        </> :
                            <>

                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaShoppingCart></FaShoppingCart>
                                        Admin Home</NavLink> </li>
                                <li> <NavLink to="/dashboard/reservation">
                                    <IoRestaurant />
                                    Reservation</NavLink> </li>
                                <li> <NavLink to="/dashboard/">
                                    <MdFormatListBulleted className="" />
                                    Manage items</NavLink> </li>
                                <li> <NavLink to="/dashboard/manageBooking">
                                    <FaBook />
                                    Manage bookings</NavLink> </li>
                                <li> <NavLink to="/dashboard/cart">
                                    <FaShoppingCart></FaShoppingCart>
                                    My cart</NavLink> </li>
                            </>

                    }

                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <IoHome />
                            Home</NavLink> </li>

                    <li>
                        <NavLink to="/order/salad">
                            <GiHamburgerMenu />
                            Our menu</NavLink> </li>
                    <li>
                        <NavLink to="/order/contract">
                            <FaEnvelope></FaEnvelope>
                            Contract</NavLink> </li>

                </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;