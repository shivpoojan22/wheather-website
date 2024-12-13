import { WeatherData } from '../types/weather';
import { INDIAN_CITIES_DATA } from '../data/indianCities';

export const getWeatherData = (city: string): WeatherData | null => {
  const normalizedCity = Object.keys(INDIAN_CITIES_DATA).find(
    key => key.toLowerCase() === city.toLowerCase()
  );
  
  return normalizedCity ? INDIAN_CITIES_DATA[normalizedCity] : null;
};

export const getAllCities = (): string[] => {
  return Object.keys(INDIAN_CITIES_DATA).sort();
};

export const getCitiesByRegion = (region: 'north' | 'south' | 'east' | 'west' | 'central' | 'northeast' | 'coastal' | 'religious'): string[] => {
  const regions: Record<string, string[]> = {
    north: ['Delhi', 'Chandigarh', 'Shimla', 'Rishikesh', 'Agra', 'Lucknow', 'Dehradun', 'Manali', 'Amritsar'],
    south: ['Chennai', 'Bangalore', 'Hyderabad', 'Thiruvananthapuram', 'Coimbatore', 'Madurai', 'Ooty', 'Tirupati'],
    east: ['Kolkata', 'Patna', 'Varanasi', 'Bhubaneswar', 'Ranchi', 'Puri', 'Darjeeling'],
    west: ['Mumbai', 'Pune', 'Ahmedabad', 'Surat', 'Goa', 'Vadodara', 'Nashik', 'Rajkot'],
    central: ['Bhopal', 'Indore', 'Raipur', 'Nagpur'],
    northeast: ['Guwahati', 'Shillong', 'Gangtok', 'Imphal', 'Aizawl', 'Itanagar', 'Agartala', 'Kohima'],
    coastal: ['Kochi', 'Mangalore', 'Pondicherry', 'Kakinada', 'Port Blair', 'Diu', 'Visakhapatnam'],
    religious: ['Amritsar', 'Haridwar', 'Mathura', 'Tirupati', 'Madurai', 'Puri', 'Ajmer', 'Dwarka', 'Varanasi']
  };
  
  return regions[region] || [];
};