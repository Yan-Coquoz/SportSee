/**
 * It returns the current hour of the day
 * @returns The hour of the day.
 */
function hourOfTheDay() {
  return new Date().getHours();
}

/**
 * It returns "Bonjour" if the hour of the day is between 5 and 17, and "Bonsoir" otherwise
 * @returns {string} A function
 */
export function renderHello() {
  const hour = hourOfTheDay();
  if (hour >= 17 || hour < 5) {
    return "Bonsoir";
  }
  return "Bonjour";
}
