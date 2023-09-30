import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./pages/MainContent/MainContent";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [cardData, setCardData] = useState([]);
  const [contractData, setContractData] = useState([]);

  useEffect(() => {
    const getCardData = async () => {
      try {
        const response = await fetch("http://localhost:5000/cards");
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    getCardData();
  }, []);

  useEffect(() => {
    const getContractData = async () => {
      try {
        const response = await fetch("http://localhost:5000/contracts");
        const data = await response.json();
        setContractData(data);
      } catch (error) {
        console.error("Error fetching contract data:", error);
      }
    };

    getContractData();
  }, []);

  const handleAddCard = async (newCard) => {
    try {
      const response = await fetch("http://localhost:5000/cards", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newCard),
      });

      const data = await response.json();
      setCardData([...cardData, data]);
    } catch (error) {
      console.error("Error adding a card:", error);
    }
  };

  const handleDeleteCard = async (id) => {
    try {
      await fetch(`http://localhost:5000/cards/${id}`, {
        method: "DELETE",
      });

      setCardData(cardData.filter((card) => card.id !== id));
    } catch (error) {
      console.error("Error deleting a card:", error);
    }
  };

  const handleAddContract = async (newContract) => {
    try {
      const response = await fetch("http://localhost:5000/contracts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newContract),
      });

      const contract = await response.json();
      setContractData([...contractData, contract]);
    } catch (error) {
      console.error("Error adding a contract:", error);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Signup",
      element: <SignUp />,
    },
    {
      path: "/Home",
      element: (
        <>
          <Header />
          <Navbar />
          <MainContent
            cardData={cardData}
            contractData={contractData}
            handleAddCard={handleAddCard}
            handleDeleteCard={handleDeleteCard}
            handleAddContract={handleAddContract}
          />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
