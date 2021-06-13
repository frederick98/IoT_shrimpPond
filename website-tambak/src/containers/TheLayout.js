import React from "react";
import {
  TheContent,
  UTheSidebar,
  //ATheContent,
  ATheSidebar,
  TheFooter,
  TheHeader,
} from "./allUser/Index";

const TheLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <ATheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
