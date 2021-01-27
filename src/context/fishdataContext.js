import React, {createContext, useState, useEffect} from 'react'

const initContext = {
    fishdata: [],
    clearFishdata: () => {
        throw new Error('clearFishdata() not implemented')
    },
}

export const FishdataContext = createContext(initContext)

export const FishdataContextProvider = ({ children }) => {
    const [fishdata, setFishdata] = useState(initContext.fishdata)

    //useEffect: get data ONCE (not reload all the time)
    useEffect(() => {
        fetchData()
    }, [])
    
     //fetch data asynchronously
    const fetchData = async () => {
            //workaround for fetching data with backend of cab
            const response = await fetch("https://cab-cors-anywhere.herokuapp.com/https://www.fishwatch.gov/api/species/")
            const data = await response.json()
            console.log('data', data)
             //update variable fishdata
            setFishdata(data)
    }

    const clearFishdata = () => {
        setFishdata([])
    }

    //check how fishdata looks like (printing outside of fetch-function ;)
    console.log('fishdata', fishdata)

    const fishDataContextProviderHelper = () => {
        return (
            <FishdataContext.Provider value={{ fishdata, clearFishdata }}>
                {children}
            </FishdataContext.Provider>
        )
    }
    const empty = () => {
        return (
            <div></div>
        )
    }
    
    return (
        <div>
            { fishdata ? fishDataContextProviderHelper()    
                    : <h2>Loading...</h2> 
            }
        </div>
    )
}