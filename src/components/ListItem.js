import React from 'react';
import { Button } from "react-bootstrap";

const ListItem = ({ item }) => {
    const styleListItems = {

    }
    return (
            <div>
                {item.scientificname &&
                    <div>
                        <h3>Species: {item.scientificname}</h3>
                        <button onClick="" variant="secondary">Details</button>
                    </div>
                }
            </div>
    )
}

export default ListItem