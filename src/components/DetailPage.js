import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { FishdataContext } from '../context/fishdataContext'
import DetailItem from './DetailItem'

// creating the DetailPage
const DetailPage = () => {
    // destructuring. get data from Context (where it is being fetched)
    const { fishdatadet, loading } = useContext(FishdataContext)
    const value = useContext(FishdataContext)
    console.log(value)
    console.log('fishdatadet in components :>>', fishdatadet)
    //has to match with Router. what I call it there
    let { AphiaID } = useParams();
    console.log('name:>>', AphiaID);

    return (
        <div>
            { !loading ? 
                <h1>Scientific Name: {AphiaID} </h1>
                    // <ListItem key={index} item={item} />
             : <h2>Loading...</h2>}
        </div>
    )
}

export default DetailPage 