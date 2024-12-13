import React from 'react';
import { Cloud, CloudDrizzle, CloudLightning, CloudRain, CloudSnow, Sun } from 'lucide-react';

interface WeatherIconProps {
  condition: string;
  size?: number;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  'Sunny': Sun,
  'Clear': Sun,
  'Partly Cloudy': Cloud,
  'Cloudy': Cloud,
  'Rain': CloudRain,
  'Drizzle': CloudDrizzle,
  'Snow': CloudSnow,
  'Thunderstorm': CloudLightning,
};

export default function WeatherIcon({ condition, size = 24, className = '' }: WeatherIconProps) {
  const Icon = iconMap[condition] || Cloud;
  return <Icon size={size} className={className} />;
}