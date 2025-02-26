import React from "react";

const ContactInfo = ({ data, onChange }) => {
  const { email, github, linkedin, qiita, line } = data;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="form-section">
      <h2 className="section-title">連絡先</h2>

      <div className="form-group">
        <label>メールアドレス</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="example@email.com"
        />
      </div>

      <div className="form-group">
        <label>GitHub URL （任意）</label>
        <input
          type="url"
          name="github"
          value={github}
          onChange={handleInputChange}
          placeholder="https://github.com/yourusername"
        />
      </div>

      <div className="form-group">
        <label>LinkedIn URL （任意）</label>
        <input
          type="url"
          name="linkedin"
          value={linkedin}
          onChange={handleInputChange}
          placeholder="https://linkedin.com/in/yourusername"
        />
      </div>

      <div className="form-group">
        <label>Qiita URL （任意）</label>
        <input
          type="url"
          name="qiita"
          value={qiita}
          onChange={handleInputChange}
          placeholder="https://qiita.com/yourusername"
        />
      </div>

      <div className="form-group">
        <label>LINE ID/URL （任意）</label>
        <input
          type="text"
          name="line"
          value={line}
          onChange={handleInputChange}
          placeholder="https://line.me/ti/p/yourid"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
