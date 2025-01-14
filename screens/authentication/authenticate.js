import react, { useState } from "react";
import Signup from "./signup";
import Register from "./register";

const Authenticate = () => {
  const [signupView, setSignupView] = useState(true);

  const toggleView = () => {
    setSignupView(!signupView);
  };

  if (signupView) {
    return <Signup toggleView={toggleView} />;
  } else {
    return <Register toggleView={toggleView} />;
  }
};

export default Authenticate;
