import React from "react";
import PropTypes from "prop-types";
import { ScaleLoadingSpinner } from "@telekom/scale-components-react";

function LoadingSpinner(props) {
  return (
    <ScaleLoadingSpinner {...props}></ScaleLoadingSpinner>
  )
}

LoadingSpinner.propTypes = {
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

export { LoadingSpinner as default }