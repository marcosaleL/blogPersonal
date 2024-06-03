import { React, useState } from "react";
import styled from 'styled-components';
import { login } from "../../Services/loginService";

// Styled component for the item price
const TextUI = styled.h1`
height: ${({ type }) => (type === 'large' ? '150px' : type === 'medium' ? '100px' : '50px')};
width: ${({ type }) => (type === 'large' ? '150px' : type === 'medium' ? '100px' : '50px')};
  font-size: ${({ type }) => (type === 'large' ? '30px' : type === 'medium' ? '20px' : '15px')};
  font-weight: bold;
  margin-bottom: 5px;
`;

// Styled component for the item description
const DataUI = styled.input`
height: ${({ type }) => (type === 'large' ? '150px' : type === 'medium' ? '150px' : '100px')};
width: ${({ type }) => (type === 'large' ? '150px' : type === 'medium' ? '150px' : '100px')};
  font-size: ${({ type }) => (type === 'large' ? '30px' : type === 'medium' ? '20px' : '15px')};
  margin-bottom: 5px;
`;

function Login( { type = "default" } ) {

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
            console.error('Login failed:', error);
            setResponse({ error: 'Login failed. Please try again.' });
          }
      };

    return (
        <div>
            <meta http-equiv="Content-Security-Policy" content="default-src 'self' https:; script-src 'self' 'unsafe-inline' https://backend-service.com; connect-src 'self' https://backend-service.com; img-src 'self' https://backend-service.com; style-src 'self' 'unsafe-inline'; font-src 'self' https://backend-service.com; object-src 'none'; frame-ancestors 'none';" />

            <TextUI>Ingrese su nombre:</TextUI>
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
            <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login;