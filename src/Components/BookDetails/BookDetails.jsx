import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDataHooks from "../Hooks/BookDataHooks";

const BookDetails = () => {
    const [singleData, setSingleData] = useState({});
    const { bookId } = useParams();
    const { info, loading } = BookDataHooks();

    useEffect(() => {
        if (info) {
            const singleData = info.find((item) => item.bookId == bookId);
            setSingleData(singleData);
            console.log(singleData);
        }
    }, [info, bookId])

    const { bookName, image, author, review, category, tags, totalPages, rating, publisher, yearOfPublishing } = singleData || {};
    return (
        <div className="flex mt-20 ml-[160px] mb-20">
            <div className="bg-slate-400 w-[570px] h-[730px] ">
                <img className="w-[450px] h-[650px] mt-10 ml-16 rounded-xl" src={image} alt="" />
            </div>
            <div className="bg-slate-200 w-[570px] h-[730px] ">
                <div className="mt-12">
                    <h3 className="text-4xl font-bold text-center text-[#131313]">{bookName}</h3>
                    <br />
                    <h4 className="text-[#131313CC] text-xl font-medium ml-14">By:{author}</h4>
                    <h3 className="ml-14">_______________________________________________________________________</h3>
                    <h3 className="ml-14 text-[#131313CC] text-xl font-medium">{category}</h3>
                    <h3 className="ml-14">_______________________________________________________________________</h3>
                    
                    <p className="ml-14 text-lg font-medium text-[#131313] "><span className="text-xl font-bold">Review:</span>{review}</p>
                    <br />
                    <br />
                    <h1 className="ml-14 text-lg font-bold text-[#131313]">Tag<span className="text-[#23BE0A]"> <span className="text-slate-200">-----</span>{tags}</span></h1>
                    <h3 className="ml-14">_______________________________________________________________________</h3>

                </div>
                <div className="flex ml-14 mt-10">
                    <div className="text-[#131313B3] text-base font-medium mr-10">
                        <h1 className="mb-[3px]">Number of Pages:</h1>
                        <h1 className="mb-[3px]">Publisher:</h1>
                        <h1 className="mb-[3px]">Year of Publishing:</h1>
                        <h1>Rating:</h1>
                    </div>
                    <div className="text-[#131313] text-lg font-semibold">
                        <h1>{totalPages}</h1>
                        <h1>{publisher}</h1>
                        <h1>{yearOfPublishing}</h1>
                        <h1>{rating}</h1>
                    </div>

                </div>
                <div className="flex text-lg font-semibold ml-36 mt-20">
                    <div className="mr-10  text-[#131313] bg-[#1313134D] w-[120px] h-[55px]  text-center rounded-lg pt-3">
                        <button>Read</button>
                    </div>
                    <div className="text-[#FFFFFF] bg-[#50B1C9] w-[120px] h-[55px] text-center rounded-lg pt-3">
                        <button>Wishlist</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default BookDetails;