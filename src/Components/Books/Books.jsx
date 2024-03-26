import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books,setBooks] =useState([]);

    useEffect( () => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))

    },[])

    return (
        <div>
            <div className="text-center text-[#131313] text-4xl font-bold mt-[100px] mb-16"> 
               <h2>Books:{books.length}</h2> 
            </div>
            <div className="grid grid-cols-3 ml-[85px] mr-[85px]">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;