import React, { useRef } from "react";
import { useRouter } from "next/router";

export const BlockLink = ({ children, as = "div", className = "", styles = {}, ...rest }) => {
  const ref = useRef();
  const router = useRouter();

  const clickHandler = (e) => {
    // If the target knows how to handle its own clicks, do nothing.
    if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
      return;
    }
    // If the user is making a selection, do nothing.
    if (window.getSelection().toString() !== "") {
      return;
    }
    // Find the first child link and follow it.
    const link = ref.current.querySelector("a[href]");
    if (link) {
      router.push(link.getAttribute("href"));
    }
  };

  const Element = as;
  const mergedStyles = {cursor: 'pointer', ...styles}

  return (
    <Element
      ref={ref}
      onClick={clickHandler}
      className={`block-link ${className}`}
      style={mergedStyles}
      {...rest}
    >
      {children}
    </Element>
  );
}
