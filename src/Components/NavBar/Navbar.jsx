import { NavLink } from "react-router-dom";
// import ErrorElement from "../ErrorElement/ErrorElement";

const Navbar = () => {
    const links = <>
        <li className="mr-3"><NavLink to="/">Home</NavLink></li>
        <li className="mr-3"><NavLink to="/ListedBooks">Listed Books</NavLink></li>
        <li className="mr-3"><NavLink to="/PagesToRead">Pages to Read</NavLink></li>
        <li><NavLink to="ErrorElement">Important</NavLink></li>
        <li><NavLink to="/YouShouldRead">You Should Read</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="ml-[110px]">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="ml-[40px] text-[#131313CC] text-lg font-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-[#131313] text-3xl font-bold">Book Vibe</a>
            </div>
            <div className=" hidden lg:flex">
                <ul className=" ml-[40px] menu menu-horizontal text-[#131313CC] text-lg font-semibold px-1">
                    {links}
                </ul>
            </div>
            <div className="flex ml-[80px]">
                <div className="mr-5">
                    <a className="btn text-[#FFFFFF] text-lg font-semibold bg-[#23BE0A]">Sign In</a>
                </div>
                <div className="">
                    <a className="btn text-[#FFFFFF] text-lg font-semibold bg-[#59C6D2]">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;