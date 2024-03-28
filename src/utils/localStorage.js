export const saveToLocalStorage = (data) =>{
    const saveData = JSON.parse(localStorage.getItem("details") || []);

    const existedData = saveData.find((item) => item.bookId == data.bookId);
    if(!existedData){
        saveData.push(data);
        localStorage.setItem("details",JSON.stringify(saveData));
        alert("Added Data Successfully")
    }
    else{
        alert("Already Have This Data");
    }
}