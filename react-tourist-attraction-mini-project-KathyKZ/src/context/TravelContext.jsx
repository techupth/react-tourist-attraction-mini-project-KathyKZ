import React, { createContext, useContext, useState, useEffect  } from "react";
import axios from "axios";

const TravelContext = createContext();

export const TravelProvider = ({props}) => {
    const [travel, setTravel] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchTravel = async () => {
        try {
            const response = await axios.get(`http://localhost:4001/trips?keywords=${keywords}`);
            setTravel(response.data);
        } catch (error) {
            setLoading(true);
        } 
    };

useEffect(() => {
    fetchTravel();
}, []);

    return (
        <TravelContext.Provider value={{travel, fetchTravel, loading}}>
            {props}
        </TravelContext.Provider>
    );
};

export const useTravel = () => {
    return useContext(TravelContext);
};