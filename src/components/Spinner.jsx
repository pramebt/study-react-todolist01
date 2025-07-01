import React from "react";
import { HashLoader } from "react-spinners";
const Spinner = ({ loading }) => {
  return (
    <div className="flex justify-center items-center ">
      <HashLoader
        color="#000000"
        size={20}
        cssOverride={{ margin: "48px", textAlign: "center" }}
        loading={loading}
      />
    </div>
  );
};

export default Spinner;
