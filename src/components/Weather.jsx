import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./Search";
import DarkMode from "./DarkMode";
import CardWeather from "./CardWeather";
import Loader from "./Loader";
import ShowError from "./ShowError";



const Weather = () => {
  const [weather, setWeather] = useState({});
  const [change, setChange] = useState(false);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(true);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  
        
  const getToggle = () => {
    if (setToggle(!toggle)) {
      document.body.classList.toggle("dark");
    } else {
      document.body.classList.toggle("dark");
    }
  };

  const getChange = () => {
    setChange(!change);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.trim());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const apiKey = "5bef01db05dd6b71694f09c366cb33a0";
    setLoading(true)
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric&lang=es`
      )
      .then((response) => {
          setWeather(response.data)
          setHasError(false)
      })
      .catch((error) => {
        console.log(error)
        setHasError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function getLocation(position) {
      const coords = position.coords;
      const lat = coords.latitude;
      const lon = coords.longitude;
      const apiKey = "5bef01db05dd6b71694f09c366cb33a0";

      setLoading(true)
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`
        )
        .then((resp) => {
            setWeather(resp.data)
            setHasError(false)
        })
        .catch((error) => {
          console.log(error)
          setHasError(true)
        })
        .finally(() => {
          setLoading(false)
        })
    });

  }, []);

  return (
    <>
      <div className="weather-header">
            <h2 className="weather-title">Weather App</h2>
            <Search 
            handleSearch={handleSearch} 
            formSubmit={handleFormSubmit} />
            <DarkMode 
            getToggle={getToggle} 
            toggle={toggle} />
      </div>
        {loading
        ? 
        (<Loader />)
        :
        ( hasError 
          ?
          (<ShowError/>)
          :
        (<>
        <CardWeather
          weather={weather}
          change={change} /><div className="btn-weather">
            <button
              className="btn-primary"
              onClick={getChange}>
              {change ? "Cambiar a °C" : "Cambiar a °F"}
            </button>
          </div>
          </>))
          }

    </>
  );
};

export default Weather;
