import React from "react";
import { useState } from "react";
import { arrowdown } from "../helper/icon";
import { arrowup } from "../helper/icon";

export const InterviewAccord = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="questionMain">
        <div className="question">
          {question}
          <button onClick={handleClick}>{show ? arrowup : arrowdown}</button>
        </div>
      </div>
      {show && <div className="answer">{answer}</div>}
    </>
  );
};
