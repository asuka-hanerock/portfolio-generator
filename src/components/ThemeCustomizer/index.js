import React from "react";

const ThemeCustomizer = ({ theme, onChange, onClose }) => {
  const handleColorChange = (property, value) => {
    onChange({ [property]: value });
  };

  return (
    <div className="theme-customizer">
      <div className="customizer-header">
        <h2>テーマのカスタマイズ</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>

      <div className="form-section">
        <h3 className="section-title">カラー設定</h3>

        <div className="color-grid">
          <div className="color-option">
            <label>ヘッダー背景</label>
            <div className="color-input-wrapper">
              <input
                type="color"
                value={theme.headerBg}
                onChange={(e) => handleColorChange("headerBg", e.target.value)}
              />
              <input
                type="text"
                value={theme.headerBg}
                onChange={(e) => handleColorChange("headerBg", e.target.value)}
                className="color-text-input"
              />
            </div>
          </div>

          <div className="color-option">
            <label>ヘッダーテキスト</label>
            <div className="color-input-wrapper">
              <input
                type="color"
                value={theme.headerText}
                onChange={(e) =>
                  handleColorChange("headerText", e.target.value)
                }
              />
              <input
                type="text"
                value={theme.headerText}
                onChange={(e) =>
                  handleColorChange("headerText", e.target.value)
                }
                className="color-text-input"
              />
            </div>
          </div>

          <div className="color-option">
            <label>メイン背景</label>
            <div className="color-input-wrapper">
              <input
                type="color"
                value={theme.mainBg}
                onChange={(e) => handleColorChange("mainBg", e.target.value)}
              />
              <input
                type="text"
                value={theme.mainBg}
                onChange={(e) => handleColorChange("mainBg", e.target.value)}
                className="color-text-input"
              />
            </div>
          </div>

          <div className="color-option">
            <label>メインテキスト</label>
            <div className="color-input-wrapper">
              <input
                type="color"
                value={theme.mainText}
                onChange={(e) => handleColorChange("mainText", e.target.value)}
              />
              <input
                type="text"
                value={theme.mainText}
                onChange={(e) => handleColorChange("mainText", e.target.value)}
                className="color-text-input"
              />
            </div>
          </div>

          <div className="color-option">
            <label>アクセントカラー</label>
            <div className="color-input-wrapper">
              <input
                type="color"
                value={theme.accentColor}
                onChange={(e) =>
                  handleColorChange("accentColor", e.target.value)
                }
              />
              <input
                type="text"
                value={theme.accentColor}
                onChange={(e) =>
                  handleColorChange("accentColor", e.target.value)
                }
                className="color-text-input"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="theme-preview">
        <h3>プレビュー</h3>
        <div
          className="preview-box"
          style={{
            backgroundColor: theme.mainBg,
            color: theme.mainText,
            border: "1px solid #ddd",
          }}
        >
          <div
            className="preview-header"
            style={{
              backgroundColor: theme.headerBg,
              color: theme.headerText,
            }}
          >
            <div className="preview-title">ポートフォリオ</div>
          </div>

          <div className="preview-content">
            <div className="preview-section">
              <div
                className="preview-section-title"
                style={{ color: theme.accentColor }}
              >
                セクション見出し
              </div>
              <div className="preview-text">テキストコンテンツのサンプル</div>
              <div
                className="preview-button"
                style={{
                  backgroundColor: theme.accentColor,
                  color: "#fff",
                }}
              >
                ボタン
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="customizer-actions">
        <button className="save-theme-button" onClick={onClose}>
          テーマを適用
        </button>

        <button
          className="reset-theme-button"
          onClick={() => {
            onChange({
              headerBg: "#2c3e50",
              headerText: "#ffffff",
              mainBg: "#f4f4f4",
              mainText: "#333333",
              accentColor: "#3498db",
            });
          }}
        >
          デフォルトに戻す
        </button>
      </div>
    </div>
  );
};

export default ThemeCustomizer;
