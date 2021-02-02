import React, { createContext, useState, useEffect } from 'react'
import axios from "axios"
const initContext = {
    fishdata: [],
    clearFishdata: () => {
        throw new Error('clearFishdata() not implemented')
    },
}

export const FishdataContext = createContext(initContext)

export const FishdataContextProvider = ({ children }) => {
    const [fishdata, setFishdata] = useState(initContext.fishdata)

    //by default data is not loading, stat-variable default false
    const [loading, setLoading] = useState(false)

    //useEffect: get data ONCE (not reload all the time)
    useEffect(() => {
        fetchData()
    }, [])

    //fetch data asynchronously
    const fetchData = async () => {

        var config = {
            method: 'get',
            url: 'www.marinespecies.org/rest/AphiaRecordsByDate?startdate=1900-02-02T10%3A36%3A22%2B00%3A00&enddate=2021-02-02T10%3A36%3A22%2B00%3A00&marine_only=true&offset=1',
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const clearFishdata = () => {
        setFishdata([])
    }

    //check how fishdata looks like (printing outside of fetch-function ;)
    console.log('fishdata new', fishdata)

    return (
        <FishdataContext.Provider value={{ fishdata, clearFishdata, loading }}>
            {children}
        </FishdataContext.Provider>
    )
}