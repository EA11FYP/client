import React, { useRef, useEffect } from "react";

import "./DataAnalysis.css";

const { tableau } = window;
const DataAnalysis = () => {
  const ref = useRef(null);
  const url = "https://public.tableau.com/views/SIH7/Dashboard1";

  const options = {
    device: "desktop",
  };

  function initviz() {
    new tableau.Viz(ref.current, url, options);
  }

  useEffect(() => {
    initviz();
  }, []);
  return (
    <React.Fragment>
      <p>National Analysis of Startups</p>
      <div className="dataAnalysis-div" ref={ref}></div>
    </React.Fragment>
  );
};

export default DataAnalysis;
