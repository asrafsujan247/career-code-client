import React from "react";
import { useParams } from "react-router";

const JobApply = () => {
  // job apply id with useParams
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h3>Apply for jobs</h3>
    </div>
  );
};

export default JobApply;
