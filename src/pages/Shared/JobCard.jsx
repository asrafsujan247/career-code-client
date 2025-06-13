import React from "react";

import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    description,
    company,
    category,
    company_logo,
    requirements,
    salaryRange,
    _id,
  } = job;
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-300 transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center p-4 gap-4">
        <figure>
          <img className="w-20 h-20" src={company_logo} alt="Company" />
        </figure>
        <div>
          <h2 className="card-title">{company}</h2>
          <p className="text-gray-200 flex items-center gap-2">
            <IoLocationSharp /> <span>{location}</span>
          </p>
        </div>
      </div>
      <div className="card-body space-y-2">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="flex items-center gap-1">
          <MdOutlineAttachMoney className="text-red-500 text-xl" />
          <span>
            Salary : {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency}
          </span>
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((req, index) => (
            <div key={index} className="badge badge-outline">
              {req}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end my-4">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply Now</button>s
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
