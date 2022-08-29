import React from "react";

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
 * It takes in an array of objects, checks if the first object has a property called 'unit', if it
 * does, it returns a paragraph with the value and unit, if it doesn't, it maps over the array and
 * returns a list item with the value and unit
 * @param {Array} payload - The data object that is passed to the tooltip.
 * @returns A function that returns a paragraph or a list of items.
 */
export function placeLabelIntoTooltip(payload) {
  if (typeof payload[0].unit !== "undefined") {
    return (
      <p className="into__tooltip-para">
        {payload[0].value} {payload[0].unit}
      </p>
    );
  }
  if (payload && payload.length) {
    return payload.map((prop, id) => {
      return prop.dataKey === "calories" ? (
        <li className="into__tooltip-list" key={id}>
          {prop.value}kCal
        </li>
      ) : (
        <li className="into__tooltip-list" key={id}>
          {prop.value}Kg
        </li>
      );
    });
  }

  return "";
}
