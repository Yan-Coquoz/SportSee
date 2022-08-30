// @ts-nocheck
import { fromLowerToUpperCase } from "./others";

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
  const days = ["l", "m", "m", "j", "v", "s", "d"];

  switch (numDay) {
    case 1:
      return fromLowerToUpperCase(days[0]);
    case 2:
      return fromLowerToUpperCase(days[1]);
    case 3:
      return fromLowerToUpperCase(days[2]);
    case 4:
      return fromLowerToUpperCase(days[3]);
    case 5:
      return fromLowerToUpperCase(days[4]);
    case 6:
      return fromLowerToUpperCase(days[5]);
    case 7:
      return fromLowerToUpperCase(days[6]);
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
