import React, { useRef } from "react";

const BasicInfo = ({ data, onChange }) => {
  const fileInputRef = useRef(null);
  const { name, title, about, logoImage } = data;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onChange({ ...data, logoImage: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-section">
      <h2 className="section-title">基本情報</h2>

      <div className="form-group">
        <label>ロゴ画像（任意）</label>
        <div className="logo-upload">
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="upload-button"
          >
            画像を選択
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleLogoUpload}
            className="hidden"
            accept="image/*"
          />
          {logoImage && (
            <div className="logo-preview">
              <img
                src={logoImage}
                alt="Logo preview"
                className="preview-image"
              />
              <button
                type="button"
                className="remove-button"
                onClick={() => onChange({ ...data, logoImage: null })}
              >
                ×
              </button>
            </div>
          )}
        </div>
        <p className="help-text">このロゴはファビコンとしても使用されます</p>
      </div>

      <div className="form-group">
        <label>名前</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="山田 太郎"
        />
      </div>

      <div className="form-group">
        <label>肩書き / タイトル</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleInputChange}
          placeholder="フロントエンドエンジニア"
        />
      </div>

      <div className="form-group">
        <label>自己紹介</label>
        <textarea
          name="about"
          value={about}
          onChange={handleInputChange}
          rows="4"
          placeholder="あなたの経歴や強み、興味のある分野などを記入してください"
        ></textarea>
      </div>
    </div>
  );
};

export default BasicInfo;
