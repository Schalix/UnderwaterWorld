import React from 'react';

const ListItem = ({ item }) => {
    return (
        <div>
            {/* Solution for html in my data: <div dangerouslySetInnerHTML={html} /> .... Dangerous because you can access xss, malitious code...*/}
            <div>
                <h3>Species Name: </h3>
                {/* CURLY BRACES: first curly braces: this will be JS, second curly braces: this will an object. */}
                <div dangerouslySetInnerHTML={{ __html: item["Species Name"] }} />
            </div>
            <div>
                <div>Habitat: </div>
                <div dangerouslySetInnerHTML={{ __html: item["Habitat"] }} />
            </div>
            
        </div>
    )
}

export default ListItem