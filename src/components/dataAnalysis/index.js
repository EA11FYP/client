import React from "react";

import DataAnalysis from "./DataAnalysis";

const index = () => {
  return (
    <div>
      <DataAnalysis
        url="https://public.tableau.com/views/SIH7/Dashboard1"
        title="National Analysis of Startups"
      />
      <DataAnalysis
        url="https://public.tableau.com/views/SIH54/Sheet3"
        title="Analysis of Startup Investments"
      />
      <DataAnalysis
        url="https://public.tableau.com/views/SIH/Sheet2"
        title="Analysis of Investors"
      />
    </div>
  );
};

export default index;
