import React from "react";
import { useNavigate } from "react-router-dom";
export default function ContactMe() {
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <div>Contact Me</div>
      <button
        className="btn"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to home page
      </button>
    </React.Fragment>
  );
}
