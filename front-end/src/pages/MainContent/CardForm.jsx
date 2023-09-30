import Form from "./Form";
import Button from "../../components/Button/Button";

const CardForm = ({
  isFormVisible,
  isEditVisible,
  inputs,
  toggleForm,
  handleSubmit,
  handleAddInput,
  handleDeleteInput,
}) => {
  return (
    <div>
      {isFormVisible && !isEditVisible && (
        <Form
          inputs={inputs}
          handleSubmit={handleSubmit}
          handleAddInput={handleAddInput}
          handleDeleteInput={handleDeleteInput}
          toggleForm={toggleForm}
        />
      )}

      <Button
        type="button"
        className="custom-button"
        label={"ADD CARD"}
        onClick={toggleForm}
      />
    </div>
  );
};

export default CardForm;
