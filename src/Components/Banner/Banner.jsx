import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="w-[1170px] h-[554px] ml-[135px] rounded-3xl bg-[#FFFF] mt-10">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="mb-[200px]">
                        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="mb-[200px] mr-[300px]">
                        <div className="mb-9">
                            <h1 className="text-5xl font-bold text-[#131313] ">Books to freshen <br /> up your bookshelf</h1>
                        </div>

                        <div>
                            <button className="btn bg-[#23BE0A] text-xl font-bold text-[#FFFFFF]"><NavLink to="/ListedBooks">View The List</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;