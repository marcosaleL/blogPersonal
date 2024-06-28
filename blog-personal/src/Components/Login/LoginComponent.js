import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../../Services/loginService";

const TitleUI = styled.h1`
  font-weight: bold;
  margin-bottom: 5px;

  @media (max-width: 600px) {
    height: 40px;
    font-size: 40px;
  }

  @media (min-width: 601px) {
    height: 40px;
    font-size: 40px;
  }
`;

const TextUI = styled.h2`
  font-weight: bold;
  margin-bottom: 10px;
  align-items: center;

  @media (max-width: 600px) {
    height: 20px;
    font-size: 20px;
  }

  @media (min-width: 601px) {
    height: 30px;
    font-size: 30px;
    margin-bottom: 15px;
  }
`;

const DataUI = styled.input`
  @media (max-width: 600px) {
    height: 20px;
    width: 80vw;
    font-size: 20px;
  }

  @media (min-width: 601px) {
    height: 25px;
    width: 25vw;
    font-size: 20px;
  }
`;

const LoginUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const credentials = {
      name,
      email,
      password,
    };

    try {
      const result = await login(credentials);
      setResponse(result);
    } catch (error) {
      console.error("Login failed:", error);
      setResponse({ error: "Login failed. Please try again." });
    }
  };

  return (
    <LoginUI>
      <meta
        httpEquiv="Content-Security-Policy"
        content="default-src 'self' https:; script-src 'self' 'unsafe-inline' https://backend-service.com; connect-src 'self' https://backend-service.com; img-src 'self' https://backend-service.com; style-src 'self' 'unsafe-inline'; font-src 'self' https://backend-service.com; object-src 'none'; frame-ancestors 'none';"
      />
      <TitleUI>Crear usuario</TitleUI>
      <TextUI>Ingrese su nombre</TextUI>
      <DataUI
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextUI>Ingrese su email</TextUI>
      <DataUI
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextUI>Ingrese su contrasenia</TextUI>
      <DataUI
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </LoginUI>
  );
}

export default Login;
