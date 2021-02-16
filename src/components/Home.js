import React, {useContext} from 'react'
import {
    Link
} from "react-router-dom";
import { AuthContext } from '../context/authContext'

// import underwaterFishH from '../media/underwaterFishH.jpg';

//put it outside of function, so App uses less memory. 
// const styleBackground = {
//     //string concatenation:
//     // backgroundImage: 'url(' + underwaterFishH + ')',
//     //$ means: templating
//     backgroundImage: `url(${underwaterFishH})`,
//     // backgroundImgUrl: underwaterFishH,
// }


const MainContent = () => {
    const { isAuthenticated, user } = useContext(AuthContext)

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
            {isAuthenticated && <h1>Hello {user.displayName}</h1>}
            <h2>Welcome to Marine Species!</h2>
            <Link to="/Species">Discover more</Link>
        </div>
    )
}

export default MainContent