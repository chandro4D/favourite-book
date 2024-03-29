import { NavLink } from "react-router-dom";
import useLocalStorage from "../Hooks/useLocalStorage";
import ListedBook from "../ListedBook/ListedBook";


const WishList = () => {
    const { localData } = useLocalStorage();
    return (
        <div>
            <div className="mt-10 rounded-[16px] bg-slate-300 text-center ml-[135px] pt-6 w-[1180px] h-[100px] text-[#131313] text-3xl font-bold">
                <h3>Books</h3>
            </div>
            <div className="w-[145px] h-[52px] text-center rounded-lg pt-3 mt-[32px] ml-[650px] bg-[#23BE0A] text-lg font-semibold text-[#FFFFFF]">
                <button>Sort By</button>
            </div>

            <div className="flex ml-[135px] mt-16">
                <div className="rounded-[8px] w-[135px] h-[50px] bg-red-100 mr-5 text-[#131313CC] text-center pt-3">
                    <h2>Read Books</h2>
                </div>
                <div className="rounded-[8px] w-[135px] h-[50px] bg-red-100 text-[#131313CC] text-center pt-3">
                    <NavLink to="/WishList"><h2>Wishlist Books</h2></NavLink>
                </div>
            </div>
            <div>
                {localData.map((data) => (
                    <ListedBook key={data.bookId} data={data}></ListedBook>
                ))}
            </div>

        </div>




    );
};

export default WishList;