import React from "react";

const ResultComponent = ({ label, result }) => {
  return (
    <div className="w3-row-padding div-result">
      <div className="w3-half">
        <p className="label-result">{label}</p>
      </div>
      <div className="w3-half">
        <p className="result">{result}</p>
      </div>
    </div>
  );
};

export default ResultComponent;
