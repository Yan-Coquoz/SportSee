import { fromLowerToUpperCase } from "./others";

/**
 * @param {object} obj retour de l'API
 * @returns {Array}
 */
/**
 * It takes an object as a parameter, then it loops through the object's data property, and if the
 * object's kind property matches the data property's kind property, it translates the kind property to
 * French, then it capitalizes the first letter of the translated word
 * @param {Object} obj - the object that contains the data to be reformatted
 * @returns {Array} An array of objects.
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
 * @param {Number} numDay  the number of the day in the week (start at 0)
 * @returns {String} the first letter of day
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
