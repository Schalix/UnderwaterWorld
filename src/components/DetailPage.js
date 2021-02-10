import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FishdataContext } from '../context/fishdataContext'
import DetailItem from './DetailItem'

 

// creating the DetailPage
const DetailPage = () => {
    // destructuring. get data from Context (where it is being fetched)
    const { fishdatadet, loading, fetchDataDetails } = useContext(FishdataContext)
    // imports ALL values: const value = useContext(FishdataContext, )
    // console.log(value)
    // console.log('fishdatadet in components :>>', fishdatadet)
    //has to match with Router. what I call it there
    let { id } = useParams();
    useEffect(() => {
        fetchDataDetails(id)
    }, [])
    // console.log('name:>>', id);
    // console.log('fishdatadet:', fishdatadet)

    return (
        <div>
            { !loading ? <div><div>Scientific Names:</div>
                    {fishdatadet.scientificname &&
                        <h3>Species: {fishdatadet.scientificname}</h3>
                }
                {fishdatadet.rank && 
                        <p>Rank: {fishdatadet.rank}</p>}
                
                {/* {fishdatadet.map((item, index) => {
                    return (
                        // Key is unique for every item. give one to every item, for example by using id, if API provides. Now we just use the index.
                        <DetailItem key={index} item={item} />
                    )
                })} */}
                </div>

                // <h1>Scientific Name: {id} </h1>
                    // <ListItem key={index} item={item} />
              : <h2>Loading...</h2>}
                
                
        </div>
    )
}


            

            console.log('Detail Page:', DetailPage)
export default DetailPage 