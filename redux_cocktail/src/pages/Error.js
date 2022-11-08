import React from "react";
import { Link } from "react-router-dom";
import { BsEmojiFrownFill, BsFillEmojiWinkFill } from "react-icons/bs";
const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Oops! {<BsEmojiFrownFill />}...The Page Not Found</h1>

        <Link to="/" className="btn btn-primary">
          Back To Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
