import React from "react";

import {
  HomeContainer,
  FormContainer,
  FormText,
  Input,
  ConvertButton,
} from "./styled";

const Home = () => {
  return (
    <HomeContainer>
      <FormContainer>
        <FormText>Enter a long URL to make a TiniURL</FormText>
        <Input />
        <ConvertButton>Convert!</ConvertButton>
      </FormContainer>
    </HomeContainer>
  );
};

export default Home;
