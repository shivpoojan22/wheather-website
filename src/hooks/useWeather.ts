import { useState } from 'react';
import { WeatherData } from '../types/weather';
import { getWeatherData, getAllCities } from '../services/weatherService';

export function useWeather(initialCity: string) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(
    getWeatherData(initialCity)
  );
  const [error, setError] = useState<string | null>(null);

  const updateLocation = (city: string) => {
    const data = getWeatherData(city);
    if (data) {
      setWeatherData(data);
      setError(null);
    } else {
      const allCities = getAllCities();
      const suggestions = allCities.slice(0, 5).join(', ');
      setError(`Weather data not available for ${city}. Try searching for cities like: ${suggestions}`);
    }
  };

  return { weatherData, error, updateLocation };
}