import { WeatherData } from '../types/weather';

// Base weather data template
const baseWeatherData: Omit<WeatherData, 'location' | 'temperature' | 'humidity' | 'windSpeed'> = {
  condition: "Partly Cloudy",
  forecast: [
    { day: "Tomorrow", temperature: 33, condition: "Sunny" },
    { day: "Wednesday", temperature: 31, condition: "Cloudy" },
    { day: "Thursday", temperature: 30, condition: "Rain" },
    { day: "Friday", temperature: 32, condition: "Sunny" },
    { day: "Saturday", temperature: 31, condition: "Partly Cloudy" }
  ]
};

// Comprehensive list of Indian cities with weather data
export const INDIAN_CITIES_DATA: Record<string, WeatherData> = {
  // Metro Cities
  'Mumbai': { ...baseWeatherData, location: 'Mumbai, Maharashtra', temperature: 32, humidity: 75, windSpeed: 12 },
  'Delhi': { ...baseWeatherData, location: 'Delhi, NCR', temperature: 35, humidity: 45, windSpeed: 8 },
  'Bangalore': { ...baseWeatherData, location: 'Bangalore, Karnataka', temperature: 28, humidity: 65, windSpeed: 10 },
  'Chennai': { ...baseWeatherData, location: 'Chennai, Tamil Nadu', temperature: 34, humidity: 80, windSpeed: 15 },
  'Kolkata': { ...baseWeatherData, location: 'Kolkata, West Bengal', temperature: 33, humidity: 70, windSpeed: 9 },
  'Hyderabad': { ...baseWeatherData, location: 'Hyderabad, Telangana', temperature: 33, humidity: 60, windSpeed: 11 },

  // State Capitals
  'Lucknow': { ...baseWeatherData, location: 'Lucknow, Uttar Pradesh', temperature: 36, humidity: 55, windSpeed: 7 },
  'Jaipur': { ...baseWeatherData, location: 'Jaipur, Rajasthan', temperature: 38, humidity: 40, windSpeed: 9 },
  'Bhopal': { ...baseWeatherData, location: 'Bhopal, Madhya Pradesh', temperature: 34, humidity: 50, windSpeed: 8 },
  'Patna': { ...baseWeatherData, location: 'Patna, Bihar', temperature: 35, humidity: 65, windSpeed: 7 },
  'Chandigarh': { ...baseWeatherData, location: 'Chandigarh, Punjab', temperature: 32, humidity: 55, windSpeed: 6 },
  'Thiruvananthapuram': { ...baseWeatherData, location: 'Thiruvananthapuram, Kerala', temperature: 31, humidity: 85, windSpeed: 12 },
  'Gandhinagar': { ...baseWeatherData, location: 'Gandhinagar, Gujarat', temperature: 36, humidity: 45, windSpeed: 9 },
  'Raipur': { ...baseWeatherData, location: 'Raipur, Chhattisgarh', temperature: 35, humidity: 50, windSpeed: 8 },
  'Ranchi': { ...baseWeatherData, location: 'Ranchi, Jharkhand', temperature: 32, humidity: 60, windSpeed: 7 },
  'Bhubaneswar': { ...baseWeatherData, location: 'Bhubaneswar, Odisha', temperature: 34, humidity: 70, windSpeed: 10 },
  'Dehradun': { ...baseWeatherData, location: 'Dehradun, Uttarakhand', temperature: 29, humidity: 65, windSpeed: 6 },

  // Major Tourist Cities
  'Agra': { ...baseWeatherData, location: 'Agra, Uttar Pradesh', temperature: 37, humidity: 45, windSpeed: 8 },
  'Varanasi': { ...baseWeatherData, location: 'Varanasi, Uttar Pradesh', temperature: 36, humidity: 60, windSpeed: 7 },
  'Udaipur': { ...baseWeatherData, location: 'Udaipur, Rajasthan', temperature: 35, humidity: 45, windSpeed: 6 },
  'Shimla': { ...baseWeatherData, location: 'Shimla, Himachal Pradesh', temperature: 22, humidity: 75, windSpeed: 5 },
  'Goa': { ...baseWeatherData, location: 'Panaji, Goa', temperature: 31, humidity: 80, windSpeed: 14 },
  'Rishikesh': { ...baseWeatherData, location: 'Rishikesh, Uttarakhand', temperature: 30, humidity: 65, windSpeed: 6 },
  'Darjeeling': { ...baseWeatherData, location: 'Darjeeling, West Bengal', temperature: 20, humidity: 80, windSpeed: 8 },
  'Manali': { ...baseWeatherData, location: 'Manali, Himachal Pradesh', temperature: 18, humidity: 70, windSpeed: 7 },
  'Ooty': { ...baseWeatherData, location: 'Ooty, Tamil Nadu', temperature: 24, humidity: 75, windSpeed: 6 },
  'Munnar': { ...baseWeatherData, location: 'Munnar, Kerala', temperature: 25, humidity: 85, windSpeed: 8 },
  'Mahabaleshwar': { ...baseWeatherData, location: 'Mahabaleshwar, Maharashtra', temperature: 27, humidity: 75, windSpeed: 9 },

  // Industrial Cities
  'Pune': { ...baseWeatherData, location: 'Pune, Maharashtra', temperature: 31, humidity: 65, windSpeed: 11 },
  'Ahmedabad': { ...baseWeatherData, location: 'Ahmedabad, Gujarat', temperature: 37, humidity: 45, windSpeed: 10 },
  'Surat': { ...baseWeatherData, location: 'Surat, Gujarat', temperature: 35, humidity: 60, windSpeed: 12 },
  'Coimbatore': { ...baseWeatherData, location: 'Coimbatore, Tamil Nadu', temperature: 30, humidity: 70, windSpeed: 8 },
  'Visakhapatnam': { ...baseWeatherData, location: 'Visakhapatnam, Andhra Pradesh', temperature: 32, humidity: 75, windSpeed: 13 },
  'Indore': { ...baseWeatherData, location: 'Indore, Madhya Pradesh', temperature: 33, humidity: 50, windSpeed: 7 },
  'Ludhiana': { ...baseWeatherData, location: 'Ludhiana, Punjab', temperature: 34, humidity: 50, windSpeed: 8 },
  'Rajkot': { ...baseWeatherData, location: 'Rajkot, Gujarat', temperature: 36, humidity: 45, windSpeed: 11 },
  'Vadodara': { ...baseWeatherData, location: 'Vadodara, Gujarat', temperature: 35, humidity: 50, windSpeed: 10 },
  'Thane': { ...baseWeatherData, location: 'Thane, Maharashtra', temperature: 32, humidity: 75, windSpeed: 11 },
  'Nashik': { ...baseWeatherData, location: 'Nashik, Maharashtra', temperature: 33, humidity: 60, windSpeed: 9 },

  // North-Eastern Cities
  'Guwahati': { ...baseWeatherData, location: 'Guwahati, Assam', temperature: 29, humidity: 80, windSpeed: 6 },
  'Shillong': { ...baseWeatherData, location: 'Shillong, Meghalaya', temperature: 24, humidity: 85, windSpeed: 5 },
  'Gangtok': { ...baseWeatherData, location: 'Gangtok, Sikkim', temperature: 22, humidity: 80, windSpeed: 4 },
  'Imphal': { ...baseWeatherData, location: 'Imphal, Manipur', temperature: 28, humidity: 75, windSpeed: 5 },
  'Aizawl': { ...baseWeatherData, location: 'Aizawl, Mizoram', temperature: 26, humidity: 80, windSpeed: 5 },
  'Itanagar': { ...baseWeatherData, location: 'Itanagar, Arunachal Pradesh', temperature: 27, humidity: 80, windSpeed: 4 },
  'Agartala': { ...baseWeatherData, location: 'Agartala, Tripura', temperature: 30, humidity: 75, windSpeed: 6 },
  'Dibrugarh': { ...baseWeatherData, location: 'Dibrugarh, Assam', temperature: 28, humidity: 85, windSpeed: 5 },
  'Kohima': { ...baseWeatherData, location: 'Kohima, Nagaland', temperature: 25, humidity: 80, windSpeed: 4 },
  'Tezpur': { ...baseWeatherData, location: 'Tezpur, Assam', temperature: 29, humidity: 80, windSpeed: 5 },

  // Religious Cities
  'Amritsar': { ...baseWeatherData, location: 'Amritsar, Punjab', temperature: 33, humidity: 55, windSpeed: 7 },
  'Haridwar': { ...baseWeatherData, location: 'Haridwar, Uttarakhand', temperature: 31, humidity: 65, windSpeed: 6 },
  'Mathura': { ...baseWeatherData, location: 'Mathura, Uttar Pradesh', temperature: 35, humidity: 50, windSpeed: 8 },
  'Tirupati': { ...baseWeatherData, location: 'Tirupati, Andhra Pradesh', temperature: 33, humidity: 70, windSpeed: 9 },
  'Madurai': { ...baseWeatherData, location: 'Madurai, Tamil Nadu', temperature: 34, humidity: 75, windSpeed: 10 },
  'Puri': { ...baseWeatherData, location: 'Puri, Odisha', temperature: 32, humidity: 80, windSpeed: 12 },
  'Ajmer': { ...baseWeatherData, location: 'Ajmer, Rajasthan', temperature: 36, humidity: 45, windSpeed: 8 },
  'Dwarka': { ...baseWeatherData, location: 'Dwarka, Gujarat', temperature: 34, humidity: 70, windSpeed: 14 },

  // Coastal Cities
  'Kochi': { ...baseWeatherData, location: 'Kochi, Kerala', temperature: 31, humidity: 85, windSpeed: 13 },
  'Mangalore': { ...baseWeatherData, location: 'Mangalore, Karnataka', temperature: 30, humidity: 80, windSpeed: 12 },
  'Pondicherry': { ...baseWeatherData, location: 'Pondicherry, Puducherry', temperature: 33, humidity: 80, windSpeed: 14 },
  'Kakinada': { ...baseWeatherData, location: 'Kakinada, Andhra Pradesh', temperature: 32, humidity: 75, windSpeed: 11 },
  'Port Blair': { ...baseWeatherData, location: 'Port Blair, Andaman & Nicobar', temperature: 30, humidity: 85, windSpeed: 15 },
  'Diu': { ...baseWeatherData, location: 'Diu, Daman & Diu', temperature: 33, humidity: 75, windSpeed: 13 }
};