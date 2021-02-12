import React from "react";

import { FormContainer, FormText, Input, Button } from "./styled";

const ConvertForm = ({ setUrlInput, convertUrl, urlInput }) => {
  return (
    <FormContainer>
      <FormText>Enter a long URL to make a TiniURL</FormText>
      <Input onChange={(e) => setUrlInput(e.target.value)} />
      <Button disabled={!urlInput} onClick={convertUrl}>
        Convert!
      </Button>
    </FormContainer>
  );
};

export default ConvertForm;
