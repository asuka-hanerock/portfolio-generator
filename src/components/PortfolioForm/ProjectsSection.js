import React from "react";

const ProjectsSection = ({ projects, onChange }) => {
  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    onChange(updatedProjects);
  };

  const addProject = () => {
    onChange([
      ...projects,
      { title: "", description: "", technologies: "", link: "" },
    ]);
  };

  const removeProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    onChange(updatedProjects);
  };

  return (
    <div className="form-section">
      <h2 className="section-title">プロジェクト</h2>

      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <div className="item-header">
            <h3>プロジェクト {index + 1}</h3>
            {projects.length > 1 && (
              <button
                type="button"
                className="remove-button"
                onClick={() => removeProject(index)}
              >
                削除
              </button>
            )}
          </div>

          <div className="form-group">
            <label>タイトル</label>
            <input
              type="text"
              value={project.title}
              onChange={(e) =>
                handleProjectChange(index, "title", e.target.value)
              }
              placeholder="プロジェクト名"
            />
          </div>

          <div className="form-group">
            <label>説明</label>
            <textarea
              value={project.description}
              onChange={(e) =>
                handleProjectChange(index, "description", e.target.value)
              }
              rows="3"
              placeholder="プロジェクトの詳細や目的、あなたの役割など"
            ></textarea>
          </div>

          <div className="form-group">
            <label>使用技術</label>
            <input
              type="text"
              value={project.technologies}
              onChange={(e) =>
                handleProjectChange(index, "technologies", e.target.value)
              }
              placeholder="React, Firebase, Tailwind CSS"
            />
          </div>

          <div className="form-group">
            <label>リンク（任意）</label>
            <input
              type="url"
              value={project.link}
              onChange={(e) =>
                handleProjectChange(index, "link", e.target.value)
              }
              placeholder="https://yourproject.com"
            />
          </div>
        </div>
      ))}

      <button type="button" className="add-button" onClick={addProject}>
        プロジェクトを追加
      </button>
    </div>
  );
};

export default ProjectsSection;
