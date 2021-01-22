import React from 'react'
// import React { useEffect, useState } from 'react'

// const List = () => {
    
//     const [setdata, setData] = useState()
    
//    //useEffect: get data ONCE (not reload all the time)
//     useEffect(() => {
//         fetchData()
//     }, [])
//         //fetch data asynchronously
//         const fetchData = async () => {
//             const response = await fetch("https://www.fishwatch.gov/api/species/")
//             const data = await response.json()
//             setData(data.results)
//         }
// }
// //check how data looks like (printing outside of fetch-function ;)
// console.log('data', data)

const List = () => {

    return (
        <div>
            <p>My List!</p>
      </div>
      )
}


// function List() {
//   return (
//     <div>
//       <h1>
//         Hello List!
//       </h1>
//     </div>
//   );
// }

export default List 