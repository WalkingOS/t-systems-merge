import React from "react";
import PropTypes from "prop-types";
import reactifyWc from "reactify-wc";

const ScaleSpinner = reactifyWc('scale-loading-spinner');

function LoadingSpinnerM(props) {
    return (
      <ScaleSpinner {...props}></ScaleSpinner>

    )
  }

LoadingSpinnerM.propTypes = {
/**
 * Works
 */
variant: PropTypes.oneOf(['white', 'primary']),

/**
 * Works
 */
size: PropTypes.oneOf(['small', 'large']),

/**
 * Works
 */
alignment: PropTypes.oneOf(['horizontal', 'vertical']),

/**
 * Works
 */
text: PropTypes.string,
}

export { LoadingSpinnerM as default }