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

/**
 * It takes a string, capitalizes the first letter, and then lowercases the rest of the string
 * @param {string} str - The string to be converted.
 * @returns {string} The first character of the string is converted to uppercase and the rest of the string is
 * converted to lowercase.
 */
export function fromLowerToUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}
