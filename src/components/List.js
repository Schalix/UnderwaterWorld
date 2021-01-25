import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'

//create List
const List = () => {
    //fishdata: my variable (array of fish), seFishData: is my setter of my variable. If this value gets changed, it will get updated
    //we declare it with a useState because it will store value and get updated, when changed.
    const [fishdata, setFishData] = useState()
    
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
            setFishData(data)
    }
    //check how fishdata looks like (printing outside of fetch-function ;)
    console.log('fishdata', fishdata)

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