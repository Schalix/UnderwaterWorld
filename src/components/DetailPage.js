import React, { useContext } from 'react'
import { FishdataDetContext } from '../context/fishdataDetailContext'
import DetailItem from './DetailItem'

// creating the DetailPage
const DetailPage = () => {
    // destructuring. get data from Context (where it is being fetched)
    const { fishdatadet, loading } = useContext(FishdataDetContext)
    const value = useContext(FishdataDetContext)
    console.log(value)
    console.log('fishdatadet in components :>>', fishdatadet)
    return (
        <div>
            { !loading ? 
                    <ListItem key={index} item={item} />
                )
            }) : <h2>Loading...</h2>}
        </div>
    )
}

export default DetailPage 