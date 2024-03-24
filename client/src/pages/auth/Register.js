import React, { useState } from "react";
import { auth } from "../../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("kundu.subrata2020@gmail.com");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const config = {
      url: `http://localhost:3000/complete-regestration`,
      handleCodeInApp: true,
    };

    const result = sendSignInLinkToEmail(auth, email, config)
      .then(() => {
        window.localStorage.setItem("emailForRegistration", email);
        console.log("result", result);
        toast.success(
          `Email is sent to ${email}. click the link to complete your registration.`
        );
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });

    setEmail("");
    setLoading("");
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
            disabled={loading}
          />
        </div>
        <button
          className="btn btn-raised btn-primary my-3"
          disabled={!email || loading}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
