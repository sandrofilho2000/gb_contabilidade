import React from "react";

const MouseScroll = ({ classes = "" }) => {
  return (
    <div className={`scroll-downs ${classes}`}>
      <div className="mousey">
        <div className="scroller"></div>
      </div>
    </div>
  );
};

export default MouseScroll;
