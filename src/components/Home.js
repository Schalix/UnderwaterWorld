import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const MainContent = () => {
    
    const styleBackground = {
        backgroundImage: 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.m1BXYm1FT1DZBSKvZL31YQHaD1%26pid%3DApi&f=1")',
        // webkitTransform: 'rotate(90deg)',
        // backgroundimage: {
        //     transform: [{ rotate: '90deg' }]
        // }
    }

    const styleBefore = {
        // content: '',
        // position: 'absolute',
        // width: '200%',
        // height: '200%',
        // top: '-50%',
        // left: '-50%',
        // z-index: '-1',
        // background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/background.png) 0 0 repeat;
    }

    return (
        <div style={styleBackground}>
            <h1>Welcome to Marine Species!</h1>
            <Link to="/List">Discover more</Link>
            {/* <button>Discover</button> */}
        </div>
    )
}

export default MainContent