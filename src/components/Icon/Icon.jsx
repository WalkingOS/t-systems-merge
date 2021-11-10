import React from "react";
import PropTypes from "prop-types";

import { ScaleIconActionClose } from "@telekom/scale-components-react";
import { ScaleIconActionAdd } from "@telekom/scale-components-react";
import { ScaleIconActionFavorite } from "@telekom/scale-components-react";

function Icon(props) {
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

  Icon.propTypes = {
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

export { Icon as default }