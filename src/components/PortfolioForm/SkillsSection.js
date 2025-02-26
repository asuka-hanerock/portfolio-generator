import React, { useState } from "react";

const SkillsSection = ({ selectedSkills, onChange }) => {
  const skillOptions = [
    // 言語
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C#",
    "C++",
    "C",
    "PHP",
    "Ruby",
    "Go",
    "Swift",
    "Kotlin",
    "Rust",
    // フレームワーク/ライブラリ
    "React",
    "Angular",
    "Vue.js",
    "Next.js",
    "Nuxt.js",
    "Node.js",
    "Express",
    "Django",
    "Flask",
    "Laravel",
    "Spring Boot",
    "Ruby on Rails",
    ".NET",
    "jQuery",
    // CSS関連
    "Sass/SCSS",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Styled Components",
    // データベース
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "SQLite",
    "Oracle",
    "SQL Server",
    "Redis",
    "Firebase",
    // クラウド/インフラ
    "AWS",
    "Google Cloud",
    "Azure",
    "Docker",
    "Kubernetes",
    "Nginx",
    "Apache",
    "Linux",
    "Git",
    "GitHub Actions",
    "CircleCI",
    "Jenkins",
  ].sort();

  const handleSkillSelect = (skill) => {
    if (selectedSkills.includes(skill)) {
      onChange(selectedSkills.filter((s) => s !== skill));
    } else {
      onChange([...selectedSkills, skill]);
    }
  };

  const handleCustomSkill = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      const newSkill = e.target.value.trim();
      if (!selectedSkills.includes(newSkill)) {
        onChange([...selectedSkills, newSkill]);
        e.target.value = "";
      }
    }
  };

  return (
    <div className="form-section">
      <h2 className="section-title">スキル</h2>

      <div className="form-group">
        <label>カスタムスキルを追加</label>
        <input
          type="text"
          placeholder="追加したいスキルを入力（Enterで追加）"
          onKeyDown={handleCustomSkill}
        />
      </div>

      <div className="skills-grid">
        {skillOptions.map((skill) => (
          <div key={skill} className="skill-option">
            <input
              type="checkbox"
              id={`skill-${skill}`}
              checked={selectedSkills.includes(skill)}
              onChange={() => handleSkillSelect(skill)}
            />
            <label htmlFor={`skill-${skill}`}>{skill}</label>
          </div>
        ))}
      </div>

      {selectedSkills.length > 0 && (
        <div className="selected-skills">
          <h3>選択したスキル:</h3>
          <div className="skills-tags">
            {selectedSkills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
                <button
                  type="button"
                  className="remove-skill"
                  onClick={() => handleSkillSelect(skill)}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsSection;
