import React from "react";
import PropTypes from "prop-types";
import { ScaleRatingStars } from "@telekom/scale-components-react";



function RatingStars(props) {
  return (
    <ScaleRatingStars {...props}>
      {props.children}
    </ScaleRatingStars>
  );
}

RatingStars.propTypes = {
/**
 * Works
 */
size: PropTypes.oneOf(['large', 'small']),

/**
 * Works
 */
minimum: PropTypes.number,

/**
 * Works
 */
max: PropTypes.number,

/**
 * Works
 */
rating: PropTypes.number,

/**
 * Works
 */
readOnly: PropTypes.bool,

/**
 * Works
 */
disabled: PropTypes.bool,

/**
 * Works
 */
ariaLabelTranslation: PropTypes.bool,

/**
 * Works
 */
label: PropTypes.string,

/**
 * Works
 */
infoText: PropTypes.string,

/**
 * Works
 */
hideLabel: PropTypes.bool,

};

export { RatingStars as default };
