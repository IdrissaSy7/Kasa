import React, { useState } from "react";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <h3 className="toggle" onClick={() => setIsOpen(!isOpen)}>
        {props.label}
        {/* Ternaire ? : */}
        {isOpen ? (
          <span className="chevron">
            <i className="fa-solid fa-chevron-up"></i>
          </span>
        ) : (
          <span className="chevron">
            <i classNam="fa-solid fa-chevron-down"></i>
          </span>
        )}
      </h3>
      {isOpen && <div className="content">{props.children}</div>}
    </div>
  );
};

export default Collapse;
