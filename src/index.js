import React, { useRef } from "react";
import { useRouter } from "next/router";

export const BlockLink = ({ children, tag = "div", style = {cursor: 'pointer'}, ...rest }) => {
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

  const Element = tag;

  return (
    <Element
      ref={ref}
      onClick={clickHandler}
      style={style}
      {...rest}
    >
      {children}
    </Element>
  );
}
