import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../common/Loader/Loader";

const CustomButton = (props) => {
  return (
    <>
      <button
        type={props?.type}
        className={`customButton ${props?.variant} ${props?.className}`}
        onClick={props.onClick}
      >
        {props.loading ? (
          <Loader />
        ) : (
          <>
            {" "}
            {props?.text} <FontAwesomeIcon icon={props?.icon} />
          </>
        )}
      </button>
    </>
  );
};

export default CustomButton;

// Usage example
