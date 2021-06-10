import React from "react";
import { ATheContent, ATheSidebar, ATheFooter, ATheHeader } from "./aIndex";

const ATheLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <ATheSidebar />
      <div className="c-wrapper">
        <ATheHeader />
        <div className="c-body">
          <ATheContent />
        </div>
        <ATheFooter />
      </div>
    </div>
  );
};

export default ATheLayout;
