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

/**
 * @param {object} obj retour de l'API
 * @returns {Array}
 */
export function reFormatDatas(obj) {
  return obj.data.map((nbrKind, key) => {
    if (Object.keys(obj.kind)[key] == nbrKind.kind) {
      const frenchDatas = englishToFrench(obj.kind[key + 1]);

      nbrKind.kind = fromLowerToUpperCase(frenchDatas);
    }

    return nbrKind;
  });
}

/**
 * It takes a string as an argument and returns a string
 * @param {String} str - the string to translate
 * @returns the French translation of the English word passed in as an argument.
 */
function englishToFrench(str) {
  switch (str) {
    case "energy":
      return "energie";
    case "strength":
      return "force";
    case "speed":
      return "vitesse";
    case "intensity":
      return "intensité";
    case "cardio":
      return "cardio";
    case "endurance":
      return "endurance";
  }
}

/**
 * @param {number} numDay  the number of the day in the week
 * @returns {string}
 */
export function handleFormatTick(numDay) {
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  switch (numDay) {
    case 1:
      return days[0];
    case 2:
      return days[1];
    case 3:
      return days[2];
    case 4:
      return days[3];
    case 5:
      return days[4];
    case 6:
      return days[5];
    case 7:
      return days[6];
  }
}

/**
 * Convert and format the date to a number of the day(to: '2020-07-01' from '1')
 * @param {String} day - The date from API.
 * @returns {Number} The day of the month.
 */
export function customTick(day) {
  return Number(day.slice(8));
}
