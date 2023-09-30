import React, { useState } from "react";
import Button from "../../components/Button/Button";

const EditForm = ({ data, onSave, onCancel }) => {
  const [editedData, setEditedData] = useState(data);

  const handleInputChange = (key, value) => {
    setEditedData({ ...editedData, [key]: value });
  };

  const handleSave = () => {
    onSave(editedData);
  };

  return (
    <div className="form-blocks">
      <form className="add-form">
        {Object.keys(data).map((key) => (
          <div key={key} className="form-input-container">
            {key.slice(0, 9) === "textfield" ? (
              <input
                type="text"
                className="form-item editable"
                value={editedData[key]}
                onChange={(e) => handleInputChange(key, e.target.value)}
              />
            ) : (
              <span>Other content for {key}</span>
            )}
          </div>
        ))}
        <div className="flex">
          <Button
            type="button"
            className="form-button form-button-cancel"
            label="Cancel"
            onClick={onCancel}
          />
          <Button
            type="button"
            className="form-button"
            label="Save"
            onClick={handleSave}
          />
        </div>
      </form>
    </div>
  );
};

export default EditForm;
