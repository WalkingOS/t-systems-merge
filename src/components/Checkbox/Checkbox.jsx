import React from "react";
import PropTypes from "prop-types";
import { ScaleCheckbox } from "@telekom/scale-components-react";

function Checkbox(props) {
    return (
      <ScaleCheckbox {...props} />
    )
  }

  Checkbox.propTypes = {
/**
 * (optional) Active switch
 */
checked: PropTypes.bool,

/**
 * (optional) Input disabled
 */
disabled: PropTypes.bool,

/**
 * (optional) Input helper text
 */
helperText: PropTypes.string,

/**
 * (optional) Input label
 */
label: PropTypes.string
}

export { Checkbox as default }