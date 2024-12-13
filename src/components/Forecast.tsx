import React from 'react';
import type { ForecastDay } from '../types/weather';
import WeatherCard from './WeatherCard';

interface ForecastProps {
  forecast: ForecastDay[];
}

export default function Forecast({ forecast }: ForecastProps) {
  return (
    <div className="w-full max-w-2xl">
      <h3 className="text-2xl font-semibold text-white mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {forecast.map((day) => (
          <WeatherCard
            key={day.day}
            day={day.day}
            temperature={day.temperature}
            condition={day.condition}
          />
        ))}
      </div>
    </div>
  );
}