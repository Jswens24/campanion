import React from 'react';
const API_KEY = process.env.REACT_APP_GOOGLE;

const MapComponent = (props) => {

    return (
        <div>
            <iframe
                width="600"
                height="450"
                // style="border:0"
                loading="lazy"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/search?q=${props.lat}%2C${props.lon}&key=${API_KEY}&maptype=satellite`}>
            </iframe>
        </div>
    )
};

export default MapComponent;
