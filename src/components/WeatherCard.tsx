import React from 'react';
import WeatherIcon from './WeatherIcon';

interface WeatherCardProps {
  day: string;
  temperature: number;
  condition: string;
}

export default function WeatherCard({ day, temperature, condition }: WeatherCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
      <p className="text-white/80 font-medium mb-2">{day}</p>
      <WeatherIcon condition={condition} size={32} className="mx-auto mb-2" />
      <p className="text-2xl font-bold text-white mb-1">{temperature}°C</p>
      <p className="text-white/70 text-sm">{condition}</p>
    </div>
  );
}