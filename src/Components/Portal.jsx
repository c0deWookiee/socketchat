import React from "react";
import { createPortal } from "react-dom";

let portalRoot = document.getElementById("portal");
let chatPortal = document.getElementById("chatPortal");

export default class Portal extends React.Component {
  constructor(props) {
    super(props);
    // 1: Create a new div that wraps the component
    this.el = document.createElement("div");
  }
  // 2: Append the element to the DOM when it mounts
  componentDidMount = () => {
    (this.props.portal === portal ? portalRoot : chatPortal).appendChild(
      this.el
    );
  };
  // 3: Remove the element when it unmounts
  componentWillUnmount = () => {
    (this.props.portal === portal ? portalRoot : chatPortal).removeChild(
      this.el
    );
  };
  render() {
    // 4: Render the element's children in a Portal
    const { children } = this.props;
    return createPortal(children, this.el);
  }
}
