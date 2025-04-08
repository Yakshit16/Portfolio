import React from "react";
import "./LoaderLogo.css"; // You can use this or delete if not needed

class LogoLoader extends React.Component {
  render() {
    const videoStylenew = {
      // display: "block",
      // margin: "0 auto",
      width: "100%",
      height: "130vh",
      // objectFit: "cover", // Ensures the video fills the space
      // backgroundColor: "#001f5f",
    };
    return (
      <>
        <div>
          <video style={videoStylenew} autoPlay loop muted playsInline>
            <source src="/yp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </>
    );
  }
}

export default LogoLoader;
