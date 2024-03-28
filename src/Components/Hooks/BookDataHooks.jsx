import { useEffect, useState } from "react";

const BookDataHooks = () => {

    const [info,setInfo] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect (() => {
        const fetchData = async() => {
            setLoading(true);
            const res = await fetch('/books.json');
            const data = await res.json();
            setInfo(data);
            setLoading(false);
        };
        fetchData();
    },[]);

    return {info,loading};
};

export default BookDataHooks;