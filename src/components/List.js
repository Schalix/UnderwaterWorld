import React, { useEffect, useState, useContext } from 'react'
import { FishdataContext } from '../context/fishdataContext'
import ListItem from './ListItem'

// creating the List
const List = () => {
    // destructuring. get data from Context (where it is being fetched)
    const { fishdata, loading } = useContext(FishdataContext)
    const value = useContext(FishdataContext)
    console.log(value)
    console.log('fishdata in components :>>', fishdata)
    return (
        <div>
            { ! loading ? fishdata.map((item, index) => {
                return (
                    // Key is unique for every item. give one to every item, for example by using id, if API provides. Now we just use the index.
                    <ListItem key={index} item={item} />
                )
            }) : <h2>Loading...</h2>}
        </div>
    )
}

export default List 