import React from "react";
import { Link, useLoaderData } from "react-router";
import {
  MdLocationOn,
  MdWork,
  MdCategory,
  MdAttachMoney,
  MdOutlineEmail,
} from "react-icons/md";
import { FaCalendarAlt, FaUserTie } from "react-icons/fa";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
    _id,
  } = job;

  return (
    <div className="max-w-5xl mx-auto  text-gray-100 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-950 to-blue-950 shadow-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src={company_logo}
          alt="Company Logo"
          className="w-20 h-20 object-contain rounded-xl bg-white p-2"
        />
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-400 text-sm mt-1">{company}</p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <p className="flex items-center gap-2">
          <MdLocationOn className="text-blue-400" /> {location}
        </p>
        <p className="flex items-center gap-2">
          <MdWork className="text-blue-400" /> {jobType}
        </p>
        <p className="flex items-center gap-2">
          <MdCategory className="text-blue-400" /> {category}
        </p>
        <p className="flex items-center gap-2">
          <FaCalendarAlt className="text-blue-400" /> Deadline:{" "}
          {applicationDeadline}
        </p>
        <p className="flex items-center gap-2">
          <MdAttachMoney className="text-blue-400" />{" "}
          {salaryRange.min.toLocaleString()} -{" "}
          {salaryRange.max.toLocaleString()}{" "}
          {salaryRange.currency.toUpperCase()}
        </p>
        <p className="flex items-center gap-2">
          <FaUserTie className="text-blue-400" /> {hr_name}
        </p>
        <p className="flex items-center gap-2">
          <MdOutlineEmail className="text-blue-400" /> {hr_email}
        </p>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2 text-white">
          Job Description
        </h2>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>

      {/* Responsibilities */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2 text-white">
          Responsibilities
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2 text-white">Requirements</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {requirements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Apply Now Button */}
      <div className="mt-10 text-center">
        <Link to={`/jobApply/${_id}`}>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-xl transition-all duration-300 hover:scale-105">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
