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
    let { scientificname } = useParams();
    console.log('name:>>', scientificname);

    return (
        <div>
            { !loading ? <h1>Scientific Name: {scientificname} </h1>
                    // <ListItem key={index} item={item} />
             : <h2>Loading...</h2>}
        </div>
    )
}

// fishdatadet.map((item, index) => {
//                 return (
//                     // Key is unique for every item. give one to every item, for example by using id, if API provides. Now we just use the index.
//                     <DetailItem key={index} item={item} />
//                 )
//             })

export default DetailPage 