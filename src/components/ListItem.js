import React from 'react';
import { Button } from "react-bootstrap";

const ListItem = ({ item }) => {
    const styleListItems = {

    }
    return (
        <div>
            <div>
                {item.scientificname != null &&
                    <div>
                        <h3>Species: {item.scientificname}</h3>
                        <button variant="secondary">Details</button>
                    </div>
                }

            </div>
        </div>
    )
}

export default ListItem