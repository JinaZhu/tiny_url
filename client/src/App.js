import styled from "styled-components";

import "./App.css";
import Home from "./components/Home";

const Logo = styled.h1`
  font-family: "Bungee", cursive;
  font-size: 39px;
  letter-spacing: 0.06em;
  color: white;
  margin-left: 10%;
`;

const LogoContainer = styled.div`
  width: 100vw;
  height: 20vh;
  display: flex;
  align-items: flex-start;
`;

function App() {
  return (
    <div className="App">
      <LogoContainer>
        <Logo>TiniURL</Logo>
      </LogoContainer>
      <Home />
    </div>
  );
}

export default App;
