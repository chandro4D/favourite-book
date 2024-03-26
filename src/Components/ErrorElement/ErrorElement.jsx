import { NavLink } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="">
            <h3 className=" text-center text-4xl font-bold text-red-400 mt-[200px]">!!Opsss</h3>
            <button className=" ml-[600px] p-2 rounded-[10px] text-4xl font-bold text-red-400 mt-[20px] bg-slate-200"><NavLink to="/">Go Back To Home</NavLink></button>
        </div>
    );
};

export default ErrorElement;