import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

const CompleteRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // validation
    if (!email || !password) {
      toast.error("Email and password is required");
      return;
    }
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForRegistration");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }

      try {
        const result = signInWithEmailLink(auth, email, window.location.href);
        // console.log(result);
        if (result.user.emailVerified) {
          // remove email from local storage
          window.localStorage.removeItem("emailForRegistration");
          let user = auth.currentUser;
          await user.updatePassword(password);

          // dispatch user with token and email
          // then redirect
        }
      } catch (error) {
        console.log("register complete error", error.message);
        setLoading(false);
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="contianer p-5">
      {loading ? (
        <h4 className="text-danger">Loading...</h4>
      ) : (
        <h4>Register</h4>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <label className="mb-3">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter email"
            disabled
          />
        </div>
        <div className="form-group my-3">
          <label className="mb-3">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter password"
            disabled={loading}
          />
        </div>
        <button
          className="btn btn-raised btn-primary"
          disabled={!email || loading}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompleteRegistration;
