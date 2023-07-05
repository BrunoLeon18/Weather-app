


const CardWeather = ({weather,change }) => {

    let iconWeather = weather.weather?.[0].icon

    return(
        <>
               <article className="weather-card">
            <div className="weather-main">
                <div className="weather-aside">
                    <h1>{change ? parseInt(parseInt( weather.main?.temp)*(9/5)+32)+"°F":parseInt( weather.main?.temp )+"°C"}</h1>
                    <ul>
                        <li>Viento: {weather.wind?.speed}m/s</li>
                        <li>Humedad: {weather.main?.humidity}%</li>
                        <li>Presion: {weather.main?.pressure}hPa</li>
                    </ul>
                </div>
                <figure className="weather-image">
                   <img src={`${iconWeather}.svg`} alt="" />
                </figure>
            </div>
            <div className="weather-footer">
                <h2>{weather.name}, {weather.sys?.country}</h2>
                <p>{weather.weather?.[0].description}</p>
            </div>
        </article>
        </>
    )
}

export default CardWeather