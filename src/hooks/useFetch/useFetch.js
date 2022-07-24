import React, { useEffect, useState } from "react";
import axios from "axios";


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try{
            const response = await axios.get(url);
            setData(response.data);
            setLoading(false);
            console.log(data)
        }
        catch(err){
            setLoading(false);
            setError(err.message);
            
        }
    
    };
    useEffect(() => {
        fetchData();
    }, []);
    return{ data, loading, error};
} 
export default useFetch;