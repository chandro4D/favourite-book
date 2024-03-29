export const saveToLocalStorage = (data) =>{
    const savedData =JSON.parse(localStorage.getItem("donate")) || [];
    const existedData = savedData.find((item) => item.bookId == data.bookId);
    if(!existedData){
        savedData.push(data);
        localStorage.setItem("donate",JSON.stringify(savedData));
        alert("added Data Succesfully");
    }
    else{
        alert("Already Have This Data");
    }

};
export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("donate")) || [];
    return data;
};