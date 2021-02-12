import React from "react";
import {
  FormText,
  ConvertedContainer,
  UrlContainer,
  Button,
  RedirectLink,
  ButtonContainer,
} from "./styled";

const Converted = ({ urlData, setisConverted, apiUrl }) => {
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
        <Button onClick={() => setisConverted(false)}>Shorten Another</Button>
      </ButtonContainer>
    </ConvertedContainer>
  );
};

export default Converted;
