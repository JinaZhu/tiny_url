import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  FormText,
  ConvertedContainer,
  UrlContainer,
  Button,
  RedirectLink,
  ButtonContainer,
} from "./styled";

const Converted = ({ urlData, setIsConverted, apiUrl }) => {
  const [copyText, setCopyText] = useState("Copy");

  function copy() {
    navigator.clipboard.writeText(apiUrl + urlData.converted_url);
    setCopyText("Copied");
  }

  return (
    <ConvertedContainer>
      <FormText>Your Long URL</FormText>
      <UrlContainer>
        <p>{urlData.original_url}</p>
      </UrlContainer>

      <FormText>Your TiniURL</FormText>
      <UrlContainer>
        <p>{apiUrl + urlData.converted_url}</p>
      </UrlContainer>
      <ButtonContainer>
        <Button>
          <RedirectLink href={apiUrl + urlData.converted_url} target="_blank">
            Visit
          </RedirectLink>
        </Button>
        <Button padding="15px 10px" onClick={copy}>
          {copyText}
        </Button>
        <Button onClick={() => setIsConverted(false)}>Shorten Another</Button>
      </ButtonContainer>
    </ConvertedContainer>
  );
};

Converted.propTypes = {
  urlData: PropTypes.object.isRequired,
  setIsConverted: PropTypes.func,
  apiUrl: PropTypes.string.isRequired,
};

export default Converted;
