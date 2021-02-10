import React from 'react';
import { useHistory } from 'react-router-dom'

const ListItem = ({ item }) => {
    const history = useHistory()
    const handleOnClick = () => {
        //href will reload the page. history.push does not. call history functionality from react router. push-function can change URL to whatever I say
        history.push(`/Details/${item.AphiaID}`)
    }
    return (
            <div>
                {item.scientificname &&
                    <div>
                        <h3>Species: {item.scientificname}</h3>
                        <button onClick={handleOnClick} variant="secondary">Details</button>
                    </div>
                }
            </div>
    )
}

export default ListItem