import React from 'react';
import { CloudSun } from 'lucide-react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import IndiaMap from './components/IndiaMap';
import ErrorMessage from './components/ErrorMessage';
import { useWeather } from './hooks/useWeather';

function App() {
  const { weatherData, error, updateLocation } = useWeather('Mumbai');

  const handleSearch = (location: string) => {
    updateLocation(location);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-indigo-900 flex flex-col items-center relative overflow-hidden">
      {/* India Map Background */}
      <IndiaMap />
      
      {/* Content */}
      <div className="w-full min-h-screen px-4 py-8 flex flex-col items-center gap-8 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 text-white mb-4">
          <CloudSun size={40} />
          <h1 className="text-3xl font-bold">Indian Weather Forecast</h1>
        </div>

        {/* Search */}
        <SearchBar onSearch={handleSearch} />

        {/* Error Message */}
        {error && <ErrorMessage message={error} />}

        {/* Weather Content */}
        {weatherData && (
          <>
            <CurrentWeather data={weatherData} />
            <Forecast forecast={weatherData.forecast} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;