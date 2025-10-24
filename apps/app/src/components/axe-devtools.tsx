"use client";

import { useEffect } from "react";

/**
 * AxeDevTools - Accessibility testing in development
 * Only runs in development mode
 */
export function AxeDevTools() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    import("@axe-core/react").then((axe) => {
      const React = require("react");
      const ReactDOM = require("react-dom");

      axe.default(React, ReactDOM, 1000, {});
    });
  }, []);

  return null;
}
