import React from "react";
import Button from "../../components/Button/Button";
import TextInputField from "./TextInputField";

const Form = ({
  inputs,
  handleSubmit,
  handleAddInput,
  handleDeleteInput,
  toggleForm,
}) => {
  return (
    <div className="form-blocks">
      <form className="add-form" onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <TextInputField
            key={input.id}
            deletable={index !== 0}
            handleDeleteInput={() => handleDeleteInput(input.id)}
          />
        ))}
        <Button
          type="button"
          className="form-input"
          label="Add Top"
          onClick={handleAddInput}
        />
        <div className="flex">
          <Button
            type="button"
            className="form-button form-button-cancel"
            label="Cancel"
            onClick={toggleForm}
          />
          <Button type="submit" className="form-button" label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
