import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export const DepWindow = ({ children, closeWindowPortal }) => {
  const externalWindow = useRef(null);
  const containerEl = useRef(null);

  useEffect(() => {
    externalWindow.current = window.open(
      "",
      "",
      "width=600,height=400,left=200,top=200"
    );
    containerEl.current = externalWindow.current.document.createElement("div");
    externalWindow.current.document.body.appendChild(containerEl.current);
    externalWindow.current.document.title = "";
    return () => externalWindow.current.close();
  }, []);

  useEffect(() => {
    while (containerEl.current.firstChild) {
      containerEl.current.removeChild(containerEl.current.firstChild);
    }
    ReactDOM.render(<>{children}</>, containerEl.current);

    return () => {
      ReactDOM.unmountComponentAtNode(containerEl.current);
    };
  }, [children]);

  return null; 
};
