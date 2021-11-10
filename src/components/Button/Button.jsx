import React from "react";
import PropTypes from "prop-types";
import reactifyWc from "reactify-wc";
import { ScaleButton } from "@telekom/scale-components-react";
const ScaleIconActionFavorite = reactifyWc('scale-icon-action-favorite');
const ScaleIconActionAdd = reactifyWc('scale-icon-action-add');

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
function ButtonM(props) {
  const { uxpinRef, ...other } = props;
  return (
    <ScaleButton {...other} ref={uxpinRef}>
      {props.children}
    </ScaleButton>
  );
}

ButtonM.propTypes = {
/**
 * children.
 *
 */
 children: PropTypes.node,

/**
 * (optional) If true, the button is disabled.
 */
 disabled: PropTypes.bool,

/**
 * (optional) Set to true when the button contains only an icon.
 */
 iconOnly: PropTypes.bool,

 startIcon: PropTypes.bool,

/**
 * (optional) Icon position related to the label.
 */
 iconPosition: PropTypes.oneOf(["after", "before"]),

/**
 * (optional) The size of the button.
 */
 size: PropTypes.oneOf(["large", "small"]),

/**
 * (optional) Button type.
 */
 type:PropTypes.oneOf(["button", "reset", "submit"]),

 variant: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export { ButtonM as default };
