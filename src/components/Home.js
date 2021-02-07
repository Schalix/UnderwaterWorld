import React from 'react'
import {
    Link
} from "react-router-dom";

// import underwaterFishH from '../media/underwaterFishH.jpg';

//put it outside of function, so App uses less memory. 
// const styleBackground = {
//     //string concatenation:
//     // backgroundImage: 'url(' + underwaterFishH + ')',
//     //$ means: templating
//     backgroundImage: `url(${underwaterFishH})`,
//     // backgroundImgUrl: underwaterFishH,

//     // webkitTransform: 'rotate(90deg)',
//     // backgroundimage: {
//     //     transform: [{ rotate: '90deg' }]
//     // }
// }


const MainContent = () => {

    // const styleBefore = {
    //     // content: '',
    //     // position: 'absolute',
    //     // width: '200%',
    //     // height: '200%',
    //     // top: '-50%',
    //     // left: '-50%',
    //     // z-index: '-1',
    //     // background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/background.png) 0 0 repeat;
    // }

    return (
        <div>
            {/* style={styleBackground} */}
            <h1>Welcome to Marine Species!</h1>
            <Link to="/List">Discover more</Link>
            {/* <button>Discover</button> */}
        </div>
    )
}

export default MainContent