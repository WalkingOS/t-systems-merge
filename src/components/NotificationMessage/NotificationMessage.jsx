import React from "react";
import PropTypes from "prop-types";
import reactifyWc from "reactify-wc";
// import { ScaleNotificationMessage } from "@telekom/scale-components-react";

const ScaleNotificationMessage= reactifyWc('scale-notification-message');

function NotificationMessageM(props) {
    return (
      <ScaleNotificationMessage {...props}>
        {props.children}
        {/* <p slot="text">Here you can add some more text.</p> */}
        {props.text ? <p slot="text">{props.text}</p> : null}
      </ScaleNotificationMessage>
    )
  }

NotificationMessageM.propTypes = {
/**
 * Works
 */
variant: PropTypes.oneOf(['error', 'warning', 'succcess', 'informational']),

/**
 * Works
 */
opened: PropTypes.bool,

/**
 * Works
 */
dismissible: PropTypes.bool,

/**
 * Not sure if works
 */
timeout: PropTypes.bool,

/**
 * Works - but doesn't look like it does in storybook and named as heading there
 */
children: PropTypes.string,

text: PropTypes.string,
}

export { NotificationMessageM as default }