import React, { use } from "react";
import loginAnimation from "../../assets/lotties/login.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../context/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const { loginUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";

  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // login user
    loginUser(email, password)
      .then((result) => {
        navigate(from, { replace: true });
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="">
          <Lottie
            className="w-72"
            animationData={loginAnimation}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />

                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </fieldset>
            </form>

            <SocialLogin from={from}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
