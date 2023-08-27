import axios from "axios";


export const fetchData = async ()=>{


    try{
        const response = await axios.get("https://mybackend1-b509.onrender.com/getUser");
        return response.data;
    }catch(e){
        console.error(e);
    }

}