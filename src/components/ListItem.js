import React from 'react';

const ListItem = ({ item }) => {
    console.log(item["Image Gallery"] )
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
            <div>
                {/* <div dangerouslySetInnerHTML={{ __html: item["Image Gallery"] }} /> */}
                {/* generates array of the property of object. now: does that array include the property we are looking for*/}
                {item["Image Gallery"] != null && item["Image Gallery"][0] && <img src={item["Image Gallery"][0].src} heigth="100px" width='100%' />}
            </div>
        </div>
    )
}

export default ListItem