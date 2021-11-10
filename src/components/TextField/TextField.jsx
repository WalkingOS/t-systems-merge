import React from "react";
import PropTypes from "prop-types";
import reactifyWc from "reactify-wc";

const ScaleTextField = reactifyWc('scale-text-field');

function TextFieldM(props) {
  return (
    <ScaleTextField {...props} />
  )
}

TextFieldM.propTypes = {
/**
 * Works
 * @uxpinpropname Text Value
 */
value: PropTypes.string,

/**
 * Works
 */
placeholder: PropTypes.string,

/**
 * Works
 */
label: PropTypes.string,

/**
 * Works
 */
helperText: PropTypes.string,

/**
 * Works
 */
type: PropTypes.oneOf(['email', 'hidden', 'number', 'password', 'tell', 'text']),

/**
 * Works
 */
disabled: PropTypes.bool,

/**
 * Works
 */
readOnly: PropTypes.bool,

/**
 * Doesn't appear to do anything to my knowledge
 */
required: PropTypes.bool,

/**
 * Doesn't Work
 */
invalid: PropTypes.bool,

/**
 * Works
 */
inputId: PropTypes.string,

/**
 * Works
 */
counter: PropTypes.bool,

/**
 * Works
 */
maxLength: PropTypes.number,

/**
 * Works
 */
minLength: PropTypes.number,
}

export { TextFieldM as default }