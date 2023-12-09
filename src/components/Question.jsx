import React from "react";
import { InterviewAccord } from "./InterviewAccord";

const Question = ({ data }) => {
  return (
    <div className="main">
      {data.map((item) => (
        <InterviewAccord key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Question;
