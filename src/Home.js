import React, { useState } from 'react';
import image1 from './Images/search.jpg';
import './App.css';
import axios from "axios";

const Home = () => {
    const [name, setName] = useState('');
    const [data, setData] = useState({
        celcius: 10,
        name: "london",
        humidity: 10,
        speed: 2
    });

    const handleClick = () => {
        if (name !== "") {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d7d6c2db7a9361345357313057f816e8&units=metric`)
                .then(res => {
                    setData({
                        celcius: res.data.main.temp,
                        name: res.data.name,
                        humidity: res.data.main.humidity,
                        speed: res.data.wind.speed
                    });
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className='container'>
            <div className="weather">
                <div className="search">
                    <input type="text" name="" id="" placeholder='enter city name' onChange={(e) => setName(e.target.value)} />
                    <button onClick={handleClick}><img src="" alt="alt" style={{ height: "50px", width: "30px" }} /></button>
                </div>
                <div className="winfo">
                    <img src={image1} alt="" style={{ height: "150px", width: "130px" }} />
                    <h1>{Math.round(data.celcius)}°C</h1>
                    <h2>{data.name}</h2>
                    <div className="details">
                        <div className="col">
                            <p>{Math.round(data.humidity)}%</p>
                            <p>Humidity</p>
                        </div>

                        <div className="col">
                            <p>{Math.round(data.speed)} km/hr</p>
                            <p>Wind</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
