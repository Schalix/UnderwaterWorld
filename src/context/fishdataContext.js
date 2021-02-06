import React, { createContext, useState, useEffect } from 'react'

const initContext = {
    fishdata: [],
    clearFishdata: () => {
        throw new Error('clearFishdata() not implemented')
    },

    fishdatadet: [],
    clearFishdataDet: () => {
        throw new Error ('clearFishdataDet() not implemented')
    }
}

export const FishdataContext = createContext(initContext)
export const FishdataDetContext = createContext(initContext)


export const FishdataContextProvider = ({ children }) => {
    const [fishdata, setFishdata] = useState(initContext.fishdata);
    const [fishdatadet, setFishdataDet] = useState(initContext.fishdatadet);

    //by default data is not loading, stat-variable default false
    const [loading, setLoading] = useState(false)

    //useEffect: get data ONCE (not reload all the time)
    useEffect(() => {
        fetchData()
    }, [])

    //fetch data asynchronously
    const fetchData = async () => {
        setLoading(true)
        const response = await fetch("https://www.marinespecies.org/rest/AphiaRecordsByDate?startdate=1900-02-02T10%3A36%3A22%2B00%3A00&enddate=2021-02-02T10%3A36%3A22%2B00%3A00&marine_only=true&offset=1")
        const data = await response.json()
        setLoading(false)
        setFishdata(data)
    }

     const fetchDataDetails = async (AphiaID) => {
        setLoading(true)
        const response = await fetch(`www.marinespecies.org/rest/AphiaRecordByAphiaID/${AphiaID}`)
        const data = await response.json()
        setLoading(false)
        setFishdataDet(data)
    }

    const clearFishdata = () => {
        setFishdata([])
    }

    //check how fishdata looks like (printing outside of fetch-function ;)
    console.log('fishdata new', fishdata)

    return (
        <FishdataContext.Provider value={{ fishdata, fishdatadet, clearFishdata, loading, fetchDataDetails }}>
            {children}
        </FishdataContext.Provider>
    )
}