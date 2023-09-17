// ResultDisplay.js
import React from "react";

function ResultDisplay({ results }) {
  // Render your result data here
  return (
    <div className="result-display">
      <h2>Results:</h2>
      <p>
        <strong>Page Title:</strong> {results.pageTitle}
      </p>
      <p>
        <strong>Meta Description:</strong> {results.metaDescription}
      </p>
      <div>
        <h3>Headers:</h3>
        <ul>
          {results.headers.map((header, index) => (
            <li key={index}>{header}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResultDisplay;
