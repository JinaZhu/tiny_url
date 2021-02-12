import React from "react";
import PropTypes from "prop-types";

import { FormContainer, FormText, Input, Button } from "./styled";

const ConvertForm = ({ setUrlInput, handleSubmit, urlInput }) => {
  return (
    <FormContainer>
      <FormText>Enter a long URL to make a TiniURL</FormText>
      <Input onChange={(e) => setUrlInput(e.target.value)} />
      <Button disabled={!urlInput} onClick={handleSubmit}>
        Convert!
      </Button>
    </FormContainer>
  );
};

ConvertForm.propTypes = {
  setUrlInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  urlInput: PropTypes.string.isRequired,
};

export default ConvertForm;
