import React from "react";
import { UTheContent, UTheSidebar, UTheFooter, UTheHeader } from "./uIndex";

const TheLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <UTheSidebar />
      <div className="c-wrapper">
        <UTheHeader />
        <div className="c-body">
          <UTheContent />
        </div>
        <UTheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
