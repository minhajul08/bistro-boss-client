import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const handelLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));

  }
  const navLinks = <>
    <li> <Link to="/">Home</Link> </li>
    <li> <Link to="/menu">Our Menu</Link> </li>
    <li> <Link to="/order/salad">Order Food</Link> </li>
    {
      user ? <>
      <span> {user?.displayName} </span>
        <li>
          <button onClick={handelLogout} className="btn btn-ghost">LogOut</button></li>
      </> : <>
        <li><Link to="/login">Login</Link></li>
      </>
    }
    <li> <Link to="/secret">Secret</Link> </li>

  </>
  return (
    <div>
      <div className="navbar max-w-screen-xl text-white fixed z-10 bg-opacity-30 bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navLinks}
            </ul>
          </div>
          <h1 className="text-2xl">Bistro Boss <br></br> Restaurant</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;