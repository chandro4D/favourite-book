const Book = ({ book }) => {
    const { image, tags, bookName, author, category, rating } = book;
    return (
        <div className="card w-[400px] h-[680px]  bg-[#F3F3F3] shadow-xl gap-10 mb-10">
            <figure><img className=" mt-5 w-[350px] h-[400px] rounded-2xl " src={image} alt="Shoes" /></figure>
            <div className="card-body ">
                <div>
                    <div className="mb-5">
                        <h1 className="text-[#23BE0A] text-base font-medium ">{tags}</h1>
                    </div>
                    <div className="mb-3">
                        <h1 className="text-[#131313] text-2xl font-bold text-center">{bookName}</h1>

                    </div>
                    <div>
                        <h1 className="text-[#131313CC] text-base font-medium mb-5">By:{author}</h1>
                    </div>


                    <div className="flex justify-between text-[#131313CC] text-base font-medium">
                        <div>
                            <h1> {category}</h1>
                        </div>
                        <div>
                            <h1>{rating}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;