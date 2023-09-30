import React from "react";
import { FaTimes } from "react-icons/fa";

const ContractCard = ({ card, handleDeleteCard, onClick }) => {
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    handleDeleteCard(card.id);
  };

  return (
    <div
      className="card-container"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <FaTimes className="card-deleteIcon" onClick={handleDeleteClick} />
    </div>
  );
};

export default ContractCard;
