import * as React from "react";

function IconShoeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shoe-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13.846 9.868l4.08 .972a4 4 0 0 1 3.074 3.89v2.27m-3 1h-14a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h2" /><path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" /><path d="M10 12l.663 -1.327" /><path d="M3 3l18 18" /></svg>;
}

export default IconShoeOff;