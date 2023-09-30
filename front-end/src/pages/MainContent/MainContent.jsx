import React, { useState } from "react";
import CardForm from "./CardForm";
import "../component.css";
import EditForm from "./EditForm";
import ContractCard from "./ContractCard";

const MainContent = ({
  cardData,
  handleAddCard,
  handleDeleteCard,
  handleAddContract,
  contractData,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [inputs, setInputs] = useState([{ id: 0, value: "", label: "" }]);

  const toggleForm = () => {
    if (isFormVisible) {
      setInputs([{ id: 0, value: "", label: "" }]);
    }
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasTextFields = inputs.length > 0;

    if (!hasTextFields) {
      alert("Please add at least one text field.");
      return;
    }

    const data = {};
    inputs.forEach((input, index) => {
      data[`textfield${index + 1}`] = input.value;
      data[`label${index + 1}`] = input.label;
    });

    handleAddCard(data);

    setIsFormVisible(false);
    setInputs([{ id: 0, value: "", label: "" }]);
  };

  const handleEdit = () => {
    setIsEditVisible(true);
  };

  const handleSaveEditedData = (editedData) => {
    handleAddContract(editedData);

    setIsEditVisible(false);
  };

  const handleCancelEditing = () => {
    setIsEditVisible(false);
  };

  const handleAddInput = () => {
    setInputs((prevInputs) => {
      const highestId = Math.max(...prevInputs.map((input) => input.id));
      const newId = highestId === -Infinity ? 0 : highestId + 1;
      return [...prevInputs, { id: newId, value: "", label: "New Textfield" }];
    });
  };

  const handleDeleteInput = (idToDelete) => {
    setInputs((prevInputs) =>
      prevInputs.filter((input) => input.id !== idToDelete)
    );
  };

  const filteredCard = (id) => {
    const filteredArray = cardData.filter((card) => card.id === id);

    const modifiedArray = filteredArray.map((card) => {
      const { id, ...restOfCard } = card;
      return restOfCard;
    });

    return modifiedArray[0];
  };

  return (
    <div className="main-content">
      <div className="grid">
        {cardData.map((card) => (
          <ContractCard
            key={card.id}
            card={card}
            handleDeleteCard={handleDeleteCard}
            onClick={() => {
              {
                handleEdit();
              }
              setSubmittedData(filteredCard(card.id));
            }}
          />
        ))}
        {isEditVisible && (
          <EditForm
            data={submittedData}
            onSave={handleSaveEditedData}
            onCancel={handleCancelEditing}
          />
        )}
        <CardForm
          isFormVisible={isFormVisible}
          isEditVisible={isEditVisible}
          inputs={inputs}
          toggleForm={toggleForm}
          handleSubmit={handleSubmit}
          handleAddInput={handleAddInput}
          handleDeleteInput={handleDeleteInput}
        />
      </div>
    </div>
  );
};

export default MainContent;
