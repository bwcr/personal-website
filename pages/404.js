import React from "react";
import CustomError from "../components/error";

const CustomNotFound = () => {
  return <CustomError errorCode={404} message={"Page not found"} />;
};

export default CustomNotFound;
