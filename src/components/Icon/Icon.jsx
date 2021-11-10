import React from "react";
import PropTypes from "prop-types";
import reactifyWc from "reactify-wc";

const ScaleIconActionFavorite = reactifyWc('scale-icon-action-favorite');
const ScaleIconActionAdd = reactifyWc('scale-icon-action-add');
const ScaleIconActionClose = reactifyWc('scale-icon-action-close')

function IconM(props) {
  let icons = props.icon;
  let comp;

  if (icons === 'favorite') {
    comp = <ScaleIconActionFavorite {...props}></ScaleIconActionFavorite>
  } else if (icons === 'add') {
    comp = <ScaleIconActionAdd {...props}></ScaleIconActionAdd>
  } else if (icons === 'close') {
    comp = <ScaleIconActionClose {...props}/>
  } else {
    comp = <div>nothing</div>
  }

    return (
      <div>
        {comp}
      </div>
    )
  }

IconM.propTypes = {
/**
 * Works
 */
icon: PropTypes.oneOf(['favorite', 'add', 'close']),

/**
 * Works
 */
fill: PropTypes.string,

/**
 * Works
 */
size: PropTypes.number,


accessibilityTitle: PropTypes.string,

/**
 * Doesn't Work
 */
focusable: PropTypes.bool,
}

export { IconM as default }