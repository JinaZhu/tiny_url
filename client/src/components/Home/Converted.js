import React, { useState } from "react";
import {
  FormText,
  ConvertedContainer,
  UrlContainer,
  Button,
  RedirectLink,
  ButtonContainer,
  Copied,
} from "./styled";

const Converted = ({ urlData, setisConverted, apiUrl }) => {
  const [CopyText, setCopyText] = useState("Copy");

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
          {CopyText}
        </Button>
        <Button onClick={() => setisConverted(false)}>Shorten Another</Button>
      </ButtonContainer>
    </ConvertedContainer>
  );
};

export default Converted;
