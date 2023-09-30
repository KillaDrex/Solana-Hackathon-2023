import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const TextInputField = ({ deletable, handleDeleteInput }) => {
  const [label, setLabel] = useState("Title of Contract");

  return (
    <div className="form-input-container">
      <input
        type="text"
        className="form-label-input"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <input type="text" className="form-item non-editable" />
      {deletable && (
        <div className="form-deleteIconContainer">
          <FaTimes className="form-deleteIcon" onClick={handleDeleteInput} />
        </div>
      )}
    </div>
  );
};

export default TextInputField;
