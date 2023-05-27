import React, { useEffect, useState } from 'react'
import Weather from './Weather';

function WeatherAPI() {
     const [lat, setLat] = useState([]);
     const [long, setLong] = useState([]);
     const [data, setData] = useState([]);
     const REACT_APP_API_KEY = 'fd91423896f93ba9f44222685139c316';
     useEffect(() => {
          const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
              setLat(position.coords.latitude);
              setLong(position.coords.longitude);
            });

            await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${long}&appid=${REACT_APP_API_KEY}`)
               .then(res => res.json())
               .then(result => {
               setData(result)
               console.log(result);
               });

          }
          fetchData();
     }, [lat,long]);

     return (
     <div>
          <Weather weatherData={data}/>
     </div>
     )
}

export default WeatherAPI