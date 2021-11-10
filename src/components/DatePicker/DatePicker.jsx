import React from "react";
import PropTypes from "prop-types";
import reactifyWc from "reactify-wc";

const ScaleDatePicker = reactifyWc('scale-date-picker');

function DatePickerM(props) {
  return (
    <ScaleDatePicker 
      {...props}
    // helperText="Make sure to fill this" label="Helper Text" value="2020-12-31"
    ></ScaleDatePicker>
  )
}

DatePickerM.propTypes = {
  /**
   * Works
   */
  value: PropTypes.string,

  /**
   * Works
   */
  label: PropTypes.string,

  /**
   * Works
   */
  name: PropTypes.string,

  /**
   * Works
   */
  label: PropTypes.string,

  /**
   * Works
   */
  helperText: PropTypes.string,

  /**
   * Didn't test
   * @uxpinignoreprop
   */
  identifier: PropTypes.string,


  /**
   * Didn't test
   * @uxpinignoreprop
   */
  role: PropTypes.string,

  /**
   * Didn't test
   * @uxpinignoreprop
   */
  direction: PropTypes.string,

  /**
   * Doesn't appear to do anything to my knowledge
   */
  required: PropTypes.bool,

  /**
   * Didn't test
   * @uxpinignoreprop
   */
  min: PropTypes.string,

  /**
   * Didn't test
   * @uxpinignoreprop
   */
  max: PropTypes.string,

  /**
   * Didn't test
   * @uxpinignoreprop
   */
  firstDayOfWeek: PropTypes.string,

  /**
   * Didn't test
   * @uxpinignoreprop
   */
  localization: PropTypes.object,

  /**
   * Didn't test
   * @uxpinignoreprop
   */
  dateAdapter: PropTypes.object,

  /**
   * Doesn't work
   */
  invalid: PropTypes.bool,

  /**
   * Works
   */
  disabled: PropTypes.bool,

  /**
   * Works
   */
  size: PropTypes.oneOf(['small', 'large']),

  /**
   * Works
   */
  popupTitle: PropTypes.string,
}  

export { DatePickerM as default }