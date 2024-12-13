export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  forecast: ForecastDay[];
}

export interface ForecastDay {
  day: string;
  temperature: number;
  condition: string;
}

// Mock data for demonstration
export const mockWeatherData: WeatherData = {
  location: "Mumbai, India",
  temperature: 32, // in Celsius
  condition: "Partly Cloudy",
  humidity: 75,
  windSpeed: 12,
  forecast: [
    { day: "Tomorrow", temperature: 33, condition: "Sunny" },
    { day: "Wednesday", temperature: 31, condition: "Cloudy" },
    { day: "Thursday", temperature: 30, condition: "Rain" },
    { day: "Friday", temperature: 32, condition: "Sunny" },
    { day: "Saturday", temperature: 31, condition: "Partly Cloudy" }
  ]
};