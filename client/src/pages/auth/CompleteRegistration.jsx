import React, { useState, useEffect, useContext } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { signInWithEmailLink } from "firebase/auth";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const CompleteRegistration = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
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

    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        console.log(result);
        console.log(result.user);
        console.log(result.user.emailVerified);
        console.log(result.emailVerified);
        console.log(result.additionalUserInfo.isNewUser);
        console.log(result.additionalUserInfo.emailVerified);
        console.log(result.additionalUserInfo.profile);
        // Clear email from storage.
        // window.localStorage.removeItem("emailForSignIn");
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
        // ==============================================
        // if (result.user.emailVerified) {
        //   // remove email from local storage
        //   window.localStorage.removeItem("emailForRegistration");
        //   let user = result.user;
        //   await auth.updatePassword(user, password);
  
        //   // dispatch user with token and email
        //   // then redirect
        //   const idTokenResult = await user.getIdTokenResult();
        //   dispatch({
        //     type: "LOGGED_IN_USER",
        //     payload: { email: user.email, token: idTokenResult.token },
        //   });
  
        //   // make api request to save/update user in mongodb
  
        //   navigate("/");
        // }
      })
      .catch((error) => {
        console.log("register complete error", error.message);
        setLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <div className="contianer p-5">
      {loading ? (
        <h4 className="text-danger">Loading...</h4>
      ) : (
        <h4>Completed your reigistration</h4>
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
