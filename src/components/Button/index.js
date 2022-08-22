import React from "react";
import PropTypes from "prop-types";

/**
 * It's a function that returns a list item with a button inside of it. The button has an image inside
 * of it.
 * @prop   {String}  srcImg  Parameter src of the img Tag
 * @prop   {String}  launch  Button trigger, activates a function in its parent.
 *
 * @return  {React.ReactElement}A React component.
 */
const Button = ({ srcImg, launch }) => {
  return (
    <li className="vn-container__bloc-nav__bloc-ul__list">
      <button
        className="vn-container__bloc-nav__bloc-ul__list__button"
        onClick={launch}
      >
        <img
          src={srcImg}
          alt="icon"
          loading="lazy"
          className="vn-container__bloc-nav__bloc-ul__list__button__img"
        />
      </button>
    </li>
  );
};

Button.propTypes = {
  srcImg: PropTypes.string.isRequired,
  launch: PropTypes.func.isRequired,
};
export default Button;
