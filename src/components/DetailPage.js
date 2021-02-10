import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FishdataContext } from '../context/fishdataContext'


// creating the DetailPage
const DetailPage = () => {
    // destructuring. get data from Context (where it is being fetched)
    // in {} what you get from other file/function. alternatively: const value = useContext - but with value you get EVERYTHING, not only the things you need. 
    const { fishdatadet, loading, fetchDataDetails } = useContext(FishdataContext)
    //has to match with Router. what I call it there
    let { id } = useParams();
    useEffect(() => {
        fetchDataDetails(id)
    }, [])


    return (
        <div>
            { !loading ? <div><div>Scientific Names:</div>
                    {fishdatadet.scientificname &&
                        <h3>Species: {fishdatadet.scientificname}</h3>
                }
                {fishdatadet.rank && 
                        <p>Rank: {fishdatadet.rank}</p>}
                </div>
              : <h2>Loading...</h2>}              
        </div>
    )
}

export default DetailPage 