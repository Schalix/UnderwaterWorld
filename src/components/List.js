import React, { useEffect, useState, useContext } from 'react'
import { FishdataContext } from '../context/fishdataContext'
import ListItem from './ListItem'

const List = () => {
    const { fishdata } = useContext(FishdataContext)
    console.log('fishdata in components :>>', fishdata)
    return (
        <div>
            {fishdata ? fishdata.map((item, index) => {
                return (
                    <ListItem item={item} />
                )
            }) : <h2>Loading...</h2>}
        </div>
    )
}

export default List 