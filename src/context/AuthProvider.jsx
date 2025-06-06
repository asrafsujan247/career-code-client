import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    loading,
    createUser,
    loginUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
