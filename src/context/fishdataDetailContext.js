import React, { createContext, useState, useEffect } from 'react'

const initContext = {
    fishdatadet: [],
    clearFishdataDet: () => {
        throw new Error('clearFishdataDet() not implemented')
    },
}

export const FishdataDetContext = createContext(initContext)

export const FishdataDetContextProvider = ({ children }) => {
    const [fishdatadet, setFishdataDet] = useState(initContext.fishdatadet)

    //by default data is not loading, stat-variable default false
    const [loading, setLoading] = useState(false)

    //useEffect: get data ONCE (not reload all the time)
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        fetchDataDetails()
    }, [])

    //fetch data asynchronously
    const fetchDataDetails = async () => {
        setLoading(true)
        const response = await fetch('http://www.marinespecies.org/rest/AphiaRecordByAphiaID/223899')
        const data = await response.text()
        console.log('data:', data)
        setLoading(false)
        setFishdataDet(data)
    }

    const clearFishdataDet = () => {
        setFishdataDet([])
    }

    //check how fishdata looks like (printing outside of fetch-function ;)
    console.log('fishdatadet', fishdatadet)

    return (
        <FishdataDetContext.Provider value={{ fishdatadet, clearFishdataDet, loading }}>
            {children}
        </FishdataDetContext.Provider>
    )
}