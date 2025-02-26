import React from "react";

const Preview = ({ html }) => {
  return (
    <div className="preview-container">
      <iframe
        title="Portfolio Preview"
        srcDoc={html}
        className="preview-frame"
        frameBorder="0"
      />
    </div>
  );
};

export default Preview;
