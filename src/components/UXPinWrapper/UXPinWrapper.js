// eslint-disable-next-line no-unused-vars
import React from "react";
import { applyPolyfills, defineCustomElements } from '@telekom/scale-components/loader';
import "@telekom/scale-components/dist/scale-components/scale-components.css";


applyPolyfills().then(() => {
  defineCustomElements(window);
})

export default function UXPinWrapper({ children }) {
  return children;
}