const ListedBook = ({ data }) => {
    return (
        <div className="ml-[135px] mt-10 mb-10">
            <div className="flex w-[1170px] h-[277px] bg-slate-300 rounded-[16px] ">
                <div className="mr-20 ">
                    <img className=" h-[250px] w-[200px] pt-6 pl-5" src={data.image} alt="" />

                </div>
                <div className="mt-6">
                    <div>
                        <h1 className="text-[#131313] text-2xl font-bold mb-[7px]">{data.bookName}</h1>
                        <h2 className="mb-[7px] text-[#131313CC] text-base font-medium">By:{data.author}</h2>
                    </div>
                    <div className="flex">
                        <div className="mr-10">
                            <h3 className="text-[#23BE0A] text-base font-medium"><span className="text-[#131313] text-base font-bold mr-4">Tag</span> {data.tags}</h3>
                        </div>
                        <div>
                            <h3 className=" mb-[7px] text-[#131313CC] text-base font-normal">Year Of Publishing:{data.yearOfPublishing}</h3>
                        </div>
                    </div>
                    <div className="flex text-[#13131399] text-base font-normal ">
                        <div className="mr-5">
                            <h2>Publisher:{data.publisher}</h2>
                        </div>
                        <div>
                            Page:{data.totalPages}
                            
                        </div>
                    </div>
                    <br />
                    <hr className="text-red-600" />
                    <br />
                    <div className="flex ">
                        <div className="mr-12 bg-[#328EFF26] w-[174px] h-[41px] rounded-[30px] text-center pt-[6px] text-[#328EFF] text-base font-medium">
                            <h3>Category:{data.category}</h3>
                        </div>
                        <div className="mr-12 bg-[#FFAC3326] w-[174px] h-[41px] rounded-[30px] text-center pt-[6px] text-[#FFAC33] text-base font-medium">
                            <h3>Rating:{data.rating}</h3>
                        </div>
                        <div className="bg-[#23BE0A] w-[174px] h-[41px] rounded-[30px] text-center pt-[6px] text-[#FFFFFF] text-base font-medium">
                            <button>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;