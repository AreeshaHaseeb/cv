import React from "react";

const ResumeSkill = props => {
  console.log(props);

  return (
    <div className="skills">
      <h1 className="resumeHeading">{props.title}</h1>
      <div className="resumeDetail">{props.children}</div>
    </div>
  );
};

export default ResumeSkill;
