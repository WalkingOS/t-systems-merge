// eslint-disable-next-line no-unused-vars
import React from "react";
import { applyPolyfills, defineCustomElements } from '@telekom/scale-components/loader';
import "@telekom/scale-components/dist/scale-components/scale-components.css";


applyPolyfills().then(() => {
  defineCustomElements(window);
})



export default function UXPinWrapper({ children }) {

  if (!document.getElementById("t-systems-merge-font")) {
    let muli = document.createElement("link");
    muli.setAttribute(
      "href",
      "node_modules/@telekom/scale-components/dist/scale-components/scale-components.css"
    );
    muli.setAttribute("rel", "stylesheet");
    muli.setAttribute("type", "text/css");
    muli.setAttribute("id", "t-systems-merge-font");
    document.head.appendChild(muli);

    }
    // defineCustomElements()
  return children;

}