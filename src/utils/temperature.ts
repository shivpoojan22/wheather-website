export const fahrenheitToCelsius = (fahrenheit: number): number => {
  return Math.round((fahrenheit - 32) * 5 / 9);
};

export const celsiusToFahrenheit = (celsius: number): number => {
  return Math.round((celsius * 9 / 5) + 32);
};