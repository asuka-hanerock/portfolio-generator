import React, { useState } from "react";
import PortfolioForm from "./components/PortfolioForm";
import CodeView from "./components/CodeView";
import Preview from "./components/Preview";
import ThemeCustomizer from "./components/ThemeCustomizer";
import HelpSection from "./components/HelpSection";
import generateHTML from "./utils/htmlGenerator";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    about: "",
    email: "",
    github: "",
    linkedin: "",
    qiita: "",
    line: "",
    logoImage: null,
    selectedSkills: [],
    certifications: [{ name: "", issuer: "", year: "" }],
    projects: [{ title: "", description: "", technologies: "", link: "" }],
    theme: {
      // テーマ設定を追加
      headerBg: "#2c3e50",
      headerText: "#ffffff",
      mainBg: "#f4f4f4",
      mainText: "#333333",
      accentColor: "#3498db",
    },
  });

  const [generatedHTML, setGeneratedHTML] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showThemeCustomizer, setShowThemeCustomizer] = useState(false);

  const handleDataChange = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const handleThemeChange = (newTheme) => {
    setFormData((prevData) => ({
      ...prevData,
      theme: { ...prevData.theme, ...newTheme },
    }));
  };

  const handleGenerateHTML = () => {
    setIsGenerating(true);

    setTimeout(() => {
      const html = generateHTML(formData);
      setGeneratedHTML(html);
      setIsGenerating(false);
      setShowPreview(false);
    }, 500);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>ポートフォリオジェネレーター</h1>
      </header>

      <div className="app-container">
        <div className="form-container">
          {showThemeCustomizer ? (
            <ThemeCustomizer
              theme={formData.theme}
              onChange={handleThemeChange}
              onClose={() => setShowThemeCustomizer(false)}
            />
          ) : (
            <>
              <HelpSection />
              <PortfolioForm
                formData={formData}
                onChange={handleDataChange}
                onGenerate={handleGenerateHTML}
                isGenerating={isGenerating}
              />

              <div className="form-actions">
                <button
                  className="theme-customize-button"
                  onClick={() => setShowThemeCustomizer(true)}
                >
                  テーマをカスタマイズ
                </button>

                <button
                  className="generate-button"
                  onClick={handleGenerateHTML}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <span className="loading-spinner"></span>
                      生成中...
                    </>
                  ) : (
                    "HTMLを生成"
                  )}
                </button>
              </div>
            </>
          )}
        </div>

        {generatedHTML && (
          <div className="result-container">
            <div className="tabs">
              <button
                className={!showPreview ? "active" : ""}
                onClick={() => setShowPreview(false)}
              >
                HTMLコード
              </button>
              <button
                className={showPreview ? "active" : ""}
                onClick={() => setShowPreview(true)}
              >
                プレビュー
              </button>
            </div>

            <div className="tab-content">
              {showPreview ? (
                <Preview html={generatedHTML} />
              ) : (
                <CodeView html={generatedHTML} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
