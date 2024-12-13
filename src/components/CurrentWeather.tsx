import React from 'react';
import { Cloud, Droplets, Wind } from 'lucide-react';
import type { WeatherData } from '../types/weather';
import WeatherMetric from './WeatherMetric';
import WeatherIcon from './WeatherIcon';

interface CurrentWeatherProps {
  data: WeatherData;
}

export default function CurrentWeather({ data }: CurrentWeatherProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 w-full max-w-2xl">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-light text-white mb-2">{data.location}</h2>
        <div className="flex items-center justify-center gap-4">
          <WeatherIcon condition={data.condition} size={48} className="text-white" />
          <p className="text-7xl font-bold text-white">{data.temperature}°C</p>
        </div>
        <p className="text-xl text-white/80 mt-2">{data.condition}</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <WeatherMetric
          icon={Cloud}
          label="Condition"
          value={data.condition}
        />
        <WeatherMetric
          icon={Droplets}
          label="Humidity"
          value={`${data.humidity}%`}
        />
        <WeatherMetric
          icon={Wind}
          label="Wind Speed"
          value={`${data.windSpeed} km/h`}
        />
      </div>
    </div>
  );
}