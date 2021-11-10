import React from "react";
import PropTypes from "prop-types";
import { ScaleTag } from "@telekom/scale-components-react";


function Tag(props) {
  return (
    <ScaleTag {...props}>
      {props.children}
    </ScaleTag>
  )
}

Tag.propTypes = {
  /**
   * Works
   * @uxpinpropname Text
   */
  children: PropTypes.string,

  /**
   * Works
   */
  variant: PropTypes.oneOf(['secondary']),

  /**
   * Works
   */
  size: PropTypes.oneOf(['small']),

  /**
   * Works
   */
  disabled: PropTypes.bool,

  /**
   * Works
   * The dismissable icon shows but not sure how to get it to perform a function on click without adding it to the whole component, which would break the href prop.
   */
  dismissable: PropTypes.bool,

  /**
   * Works
   */
  dismissText: PropTypes.string,

  /**
   * 
   */
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),


  /**
   * Works
   */
  href: PropTypes.string,
}

export { Tag as default }