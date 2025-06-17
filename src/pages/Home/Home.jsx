import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import Loading from "../Shared/Loading";

// Fetching jobs data from the server
const jobsPromise = fetch("http://localhost:5000/jobs").then((res) =>
  res.json()
);

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<Loading></Loading>}>
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;
