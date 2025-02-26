import React from "react";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import SkillsSection from "./SkillsSection";
import CertificationsSection from "./CertificationsSection";
import ProjectsSection from "./ProjectsSection";

const PortfolioForm = ({ formData, onChange, onGenerate, isGenerating }) => {
  const handleChange = (section, data) => {
    onChange({ ...formData, ...data });
  };

  return (
    <div className="portfolio-form">
      <BasicInfo
        data={{
          name: formData.name,
          title: formData.title,
          about: formData.about,
          logoImage: formData.logoImage,
        }}
        onChange={(data) => handleChange("basic", data)}
      />

      <ContactInfo
        data={{
          email: formData.email,
          github: formData.github,
          linkedin: formData.linkedin,
          qiita: formData.qiita,
          line: formData.line,
        }}
        onChange={(data) => handleChange("contact", data)}
      />

      <SkillsSection
        selectedSkills={formData.selectedSkills}
        onChange={(skills) =>
          handleChange("skills", { selectedSkills: skills })
        }
      />

      <CertificationsSection
        certifications={formData.certifications}
        onChange={(certifications) =>
          handleChange("certifications", { certifications })
        }
      />

      <ProjectsSection
        projects={formData.projects}
        onChange={(projects) => handleChange("projects", { projects })}
      />

    </div>
  );
};

export default PortfolioForm;
