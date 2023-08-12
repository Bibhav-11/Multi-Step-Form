import "./Success.css";

import imgSuccess from "../assets/images/icon-thank-you.svg";

function Success() {
  return (
    <div className="success-container">
      <img src={imgSuccess} />
      <h2>Thank You!</h2>
      <p>
        Thanks for confirming our subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default Success;
