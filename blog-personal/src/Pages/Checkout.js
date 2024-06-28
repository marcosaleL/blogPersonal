import React, { useState } from "react";
import Header from "../Components/Header/HeaderComponent";

import styled from "styled-components";

const CheckoutUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Checkout() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiryDate, setCardExpiryDate] = useState("");
  const [cardCode, setCardCode] = useState("");

  const handleCardNumberChange = (e) => setCardNumber(e.target.value);
  const handleCardNameChange = (e) => setCardName(e.target.value);
  const handleCardExpiryDateChange = (e) => setCardExpiryDate(e.target.value);
  const handleCardCodeChange = (e) => setCardCode(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the form submission logic
    console.log("Card Number:", cardNumber);
    console.log("Card Name:", cardName);
    console.log("Card Expiry Date:", cardExpiryDate);
    console.log("Card Code:", cardCode);
  };

  return (
    <CheckoutUI>
      <Header />
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <h3>Card Number:</h3>
        <input
          type="text"
          placeholder="1234 1234 1234 1234"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
        <h3>Card Name:</h3>
        <input
          type="text"
          placeholder="John Doe"
          value={cardName}
          onChange={handleCardNameChange}
        />
        <h3>Card Expiry Date:</h3>
        <input
          type="text"
          placeholder="12/06"
          value={cardExpiryDate}
          onChange={handleCardExpiryDateChange}
        />
        <h3>Card Code:</h3>
        <input
          type="password"
          placeholder="123"
          value={cardCode}
          onChange={handleCardCodeChange}
        />
        <button type="submit">Checkout</button>
      </form>
    </CheckoutUI>
  );
}
