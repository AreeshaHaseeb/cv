import React from "react";

const RightSide = props => {
  console.log(props);

  return (
    <div className="work">
      <h1 className="resumeHeading">{props.title}</h1>
      <div className="resumeDetail">{props.children}</div>
    </div>
  );
};

export default RightSide;
