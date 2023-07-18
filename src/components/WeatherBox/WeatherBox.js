import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import ErrorBox from '../ErrorBox/ErrorBox';
import { useCallback, useState } from 'react';

const WeatherBox = props => {
  const [weather, setWeather] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const [inputError, setInputError] = useState(false);
  const handleCityChange = useCallback(city => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    setPending(true);
    setError(false);
    setInputError(false);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => {
        if (res.status === 200) {
          return res.json().then(data => {
            setPending(false);
            console.log(data);
            const weatherData = {
              city: data.name,
              temp: data.main.temp,
              icon: data.weather[0].icon,
              description: data.weather[0].main
            };
            setWeather(weatherData);
          });
        } else {
          setPending(false);
          setInputError(true);
          throw new Error('Weather information is currently unavailable');
        }
      })
      .catch(error => {
        setPending(false);
        setError(true);
        console.error('Error in fetching weather data:', error);
      });
  }, []);
  return (
    <section>
      {inputError && <ErrorBox>Invalid city name!</ErrorBox>}
      <PickCity action={handleCityChange} />
      {(weather && !pending && !inputError) && <WeatherSummary {...weather} />}
      {(pending && !error && !inputError) && <Loader />}
      {error && <ErrorBox>There is no such a city!</ErrorBox>}
    </section>
  );
};

export default WeatherBox;
