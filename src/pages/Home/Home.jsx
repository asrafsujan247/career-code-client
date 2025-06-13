import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

// Fetching jobs data from the server
const jobsPromise = fetch("http://localhost:5000/jobs").then((res) =>
  res.json()
);

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="text-center text-2xl font-bold">Loading...</div>
        }
      >
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;
