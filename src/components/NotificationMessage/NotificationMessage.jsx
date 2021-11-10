import React from "react";
import PropTypes from "prop-types";
import reactifyWc from "reactify-wc";
import { ScaleNotificationMessage } from "@telekom/scale-components-react";

// const ScaleNotificationMessage= reactifyWc('scale-notification-message');

function NotificationMessage(props) {
  return (
    <ScaleNotificationMessage {...props}>
      {props.children}
      {/* <p slot="text">Here you can add some more text.</p> */}
      {/* {props.text ? <p slot="text">{props.text}</p> : null} */}
    </ScaleNotificationMessage>
  )
}

NotificationMessage.propTypes = {
  /**
   * Works
   */
  variant: PropTypes.oneOf(['error', 'warning', 'success', 'informational']),

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
* @uxpinpropname  text
   */
  children: PropTypes.string,

}

export { NotificationMessage as default }