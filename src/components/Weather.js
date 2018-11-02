import React from "react";

const Weather = props => (
            <div className = "data">
            {props.error && <p>{props.error}</p>}
            {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
            {props.temperature &&<p>Temperature: {props.temperature}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p>Conditions: {props.description}</p>}
            </div>

        );
    
    


export default Weather;