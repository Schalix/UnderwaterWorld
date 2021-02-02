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
    }

    return (
        <div style={styleBackground}>
            {/* style={{ backgroundImage: 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.m1BXYm1FT1DZBSKvZL31YQHaD1%26pid%3DApi&f=1")'}} */}
            <h1>Welcome to Marine Species!</h1>
            <Link to="/List">Discover more</Link>
            {/* <button>Discover</button> */}
        </div>
    )
}

export default MainContent