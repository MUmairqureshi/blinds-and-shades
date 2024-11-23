import Header from "../Header";
import Footer from "../Footer";

import React from "react";

const UserLayout = (props) => {
  return (
    <div className="d-flex flex-column " style={{ minHeight: "100vh" }}>
      <Header />
      <div className="flex-grow-1">{props.children}</div>

      <Footer />
    </div>
  );
};

export default UserLayout;
