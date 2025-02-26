import React from "react";

const CertificationsSection = ({ certifications, onChange }) => {
  const handleCertificationChange = (index, field, value) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index] = {
      ...updatedCertifications[index],
      [field]: value,
    };
    onChange(updatedCertifications);
  };

  const addCertification = () => {
    onChange([...certifications, { name: "", issuer: "", year: "" }]);
  };

  const removeCertification = (index) => {
    const updatedCertifications = [...certifications];
    updatedCertifications.splice(index, 1);
    onChange(updatedCertifications);
  };

  return (
    <div className="form-section">
      <h2 className="section-title">資格・認定</h2>

      {certifications.map((cert, index) => (
        <div key={index} className="certification-item">
          <div className="item-header">
            <h3>資格 {index + 1}</h3>
            {certifications.length > 1 && (
              <button
                type="button"
                className="remove-button"
                onClick={() => removeCertification(index)}
              >
                削除
              </button>
            )}
          </div>

          <div className="form-group">
            <label>資格名</label>
            <input
              type="text"
              value={cert.name}
              onChange={(e) =>
                handleCertificationChange(index, "name", e.target.value)
              }
              placeholder="基本情報技術者"
            />
          </div>

          <div className="form-group">
            <label>発行機関</label>
            <input
              type="text"
              value={cert.issuer}
              onChange={(e) =>
                handleCertificationChange(index, "issuer", e.target.value)
              }
              placeholder="IPA（情報処理推進機構）"
            />
          </div>

          <div className="form-group">
            <label>取得年</label>
            <input
              type="text"
              value={cert.year}
              onChange={(e) =>
                handleCertificationChange(index, "year", e.target.value)
              }
              placeholder="2023年"
            />
          </div>
        </div>
      ))}

      <button type="button" className="add-button" onClick={addCertification}>
        資格を追加
      </button>
    </div>
  );
};

export default CertificationsSection;
