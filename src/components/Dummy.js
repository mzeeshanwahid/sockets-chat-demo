import React, { useState, useEffect, useRef } from "react";

const Dummy = () => {
  const [height, setHeight] = useState(0);
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if(ref.current) setHeight(ref.current.clientHeight);
    console.log(ref);
    setShow(true);
  });

  return show ? <div ref={ref}>{height}</div> : <span>Nothing</span>;
};

export default Dummy;