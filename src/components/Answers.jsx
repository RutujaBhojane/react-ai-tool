import React from "react";

const Answers = ({ ans, key }) => {
  console.log("Answer component called with ans:", ans, "and key:", key);
  return (
    <>
      <h1>{ans}</h1>
    </>
  );
};

export default Answers;
