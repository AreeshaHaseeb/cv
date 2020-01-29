import React from "react";

const SkillBar = ({ title, value }) => {
  const dots = [];
  for (let i = 0; i < 5; i++) {
    dots.push(<span className={value > i ? "full" : "not_full"} />);
  }

  return (
    <div className="skill_bar">
      <span className="skill_name">{title}</span>
      <div className="skill_level">{dots}</div>
    </div>
  );
};

export default SkillBar;
