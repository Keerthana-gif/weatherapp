
import { useState } from "react"
import axios from "axios"
function Weather()
{
    const[city,setcity]=useState("")

    const [weather,setweather] = useState("")
    const [temp,settemp] = useState("")
    const [desc,setdesc] = useState("")



    function handleCity(evt)
    {
        setcity(evt.target.value)
    }

    function getWeather()
    {
        var weatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=64af6fb7d4d65da37035f4ef780dcfd4`);

        weatherData.then(function(success)
    {
        console.log(success)
        setweather(success.data.weather[0].main)
        setdesc(success.data.weather[0].description)
        settemp(success.data.main.temp)

    })
    }

    return(
        <div className="bg-black p-20">
            <div className="bg-green-400 p-10 rounded-md">
                <h1 className="text-2xl font-medium">Weather Report</h1>
                <p>I Can give you a weather report about your city!</p>
                <input onChange={handleCity}  type="text" className="mt-2 border border-black-rounded-md"></input>
                <br></br>
                <button onClick={getWeather}  className="bg-black text-white p-2 rounded-md mt-2">Get Report</button>
                <div className="mt-2">
                    <h1><b> Weather:</b>{weather}</h1>
                    <h1><b>Temperature:</b>{temp}</h1>
                    <h1><b>Description:</b>{desc}</h1>
                </div>
            </div>
        </div>
    )
}
export default Weather