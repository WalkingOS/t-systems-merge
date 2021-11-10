import React from "react";
import PropTypes from "prop-types";
import reactifyWc from "reactify-wc";
// import { ScaleRatingStars } from "@telekom/scale-components-react";

const ScaleRatingStars = reactifyWc('scale-rating-stars');


function RatingStarsM(props) {
  return (
    <ScaleRatingStars {...props}>
      {props.children}
    </ScaleRatingStars>
  );
}

RatingStarsM.propTypes = {
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

export { RatingStarsM as default };
