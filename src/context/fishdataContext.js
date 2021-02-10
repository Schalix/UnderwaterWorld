import React, { createContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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

    // console.log('id: ', id)

    //by default data is not loading, stat-variable default false
    const [loading, setLoading] = useState(false)

    //useEffect: get data ONCE (not reload all the time)
    //useEffect: always gets executed at least once. I dont need to call it!
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

    const fetchDataDetails = async (id) => {
        setLoading(true)
         const response = await fetch(`https://www.marinespecies.org/rest/AphiaRecordByAphiaID/${id}`)
         const data = await response.json()
         //  www.marinespecies.org/rest/AphiaRecordByAphiaID/${item.AphiaID}
        console.log('data', data)
        setLoading(false)
         setFishdataDet(data)
     
    }

    const clearFishdata = () => {
        setFishdata([])
    }

    //check how fishdata looks like (printing outside of fetch-function ;)
    // console.log('fishdata new', fishdata)

    return (
        <FishdataContext.Provider value={{ fishdata, fishdatadet, clearFishdata, loading, fetchDataDetails }}>
            {children}
        </FishdataContext.Provider>
    )
}