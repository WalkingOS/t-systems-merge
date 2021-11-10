import React from "react";
import PropTypes from "prop-types";
import reactifyWc from "reactify-wc";
// import { ScaleCheckbox } from "@telekom/scale-components-react";

const ScaleCheckbox = reactifyWc('scale-checkbox');


function CheckboxM(props) {
    return (
      <ScaleCheckbox {...props} />
    )
  }

CheckboxM.propTypes = {
/**
 * (optional) Active swi tch
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

export { CheckboxM as default }