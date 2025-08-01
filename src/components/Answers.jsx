import React, { useEffect, useState } from "react";
import { checkHeading } from "../helper";
import { replaceHeadingStars } from "../helper";

const Answers = ({ ans, index, totalResult }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans); //ans is the item of the result array
  console.log(index);

  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStars(ans));
    }
  }, []);
  return (
    <>
      {index === 0 && totalResult > 1 ? (
        <span className="pt-2 text-lg block text-white">{answer}</span>
      ) : heading ? (
        <span className="pt-2 text-lg block text-white">{answer}</span>
      ) : (
        <span className="pl-5">{answer}</span>
      )}
    </>
  );
};

export default Answers;
