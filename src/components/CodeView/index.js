import React, { useState } from "react";

const CodeView = ({ html }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(html);
    setCopySuccess(true);

    // 3秒後にメッセージを消す
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };

  const downloadHTML = () => {
    const element = document.createElement("a");
    const file = new Blob([html], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = "portfolio.html";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="code-view">
      <div className="code-actions">
        <button
          className={`copy-button ${copySuccess ? "success" : ""}`}
          onClick={copyToClipboard}
        >
          {copySuccess ? "コピーしました！" : "HTMLをコピー"}
        </button>
        <button className="download-button" onClick={downloadHTML}>
          HTMLをダウンロード
        </button>
      </div>

      <div className="code-container">
        <pre className="code-content">{html}</pre>
      </div>
    </div>
  );
};

export default CodeView;
