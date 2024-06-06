import { React, useState } from "react";
import styled from 'styled-components';
import { login } from "../../Services/loginService";

const TitleUI = styled.h1`
    height: ${({ size }) => (size === 'large' ? '40px' : size === 'medium' ? '25px' : '10px')};
    width: ${({ size }) => (size === 'large' ? '100vw' : size === 'medium' ? '50vw' : '25vw')};
    font-size: ${({ size }) => (size === 'large' ? '40px' : size === 'medium' ? '25px' : '10px')};
    font-weight: bold;
    margin-bottom: 5px;
`;

const TextUI = styled.h2`
    height: ${({ size }) => (size === 'large' ? '30px' : size === 'medium' ? '20px' : '10px')};
    width: ${({ size }) => (size === 'large' ? '100vw' : size === 'medium' ? '50vw' : '25vw')};
    font-size: ${({ size }) => (size === 'large' ? '30px' : size === 'medium' ? '20px' : '10px')};
    font-weight: bold;
    margin-bottom: 20px;
    align-items: center;
`;

const DataUI = styled.input`
    height: ${({ size }) => (size === 'large' ? '25px' : size === 'medium' ? '15px' : '10px')};
    width: ${({ size }) => (size === 'large' ? '100vw' : size === 'medium' ? '50vw' : '25vw')};
    font-size: ${({ size }) => (size === 'large' ? '30px' : size === 'medium' ? '20px' : '15px')};
`;

const LoginUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Login( { size = "large" } ) {

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
        <LoginUI>
            <meta http-equiv="Content-Security-Policy" content="default-src 'self' https:; script-src 'self' 'unsafe-inline' https://backend-service.com; connect-src 'self' https://backend-service.com; img-src 'self' https://backend-service.com; style-src 'self' 'unsafe-inline'; font-src 'self' https://backend-service.com; object-src 'none'; frame-ancestors 'none';" />
            <TitleUI size="large">Crear usuario</TitleUI> 
            <TextUI size="medium">Ingrese su nombre</TextUI>
            <DataUI
            size="medium"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
            <TextUI size="medium">Ingrese su email</TextUI>
            <DataUI
            size="medium"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <TextUI size="medium">Ingrese su contrasenia</TextUI>
            <DataUI
            size="medium"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <div>
              <button type="submit" onClick={handleSubmit}>Login</button>
            </div>
        </LoginUI>
    )
}

export default Login;