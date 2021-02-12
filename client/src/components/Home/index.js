import React, { useState } from "react";

import { HomeContainer } from "./styled";
import Converted from "./Converted";
import ConvertForm from "./ConvertForm";

const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://0.0.0.0:8000/"
    : "https://tiniurl.herokuapp.com/";

const Home = () => {
  const [urlInput, setUrlInput] = useState("");
  const [isConverted, setisConverted] = useState(false);
  const [urlData, setUrlData] = useState(undefined);

  async function convertUrl(e) {
    e.preventDefault();
    const body = {
      url: urlInput,
    };
    try {
      const response = await fetch(`${apiUrl}/api/convert_url`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (data.converted_url) {
        setUrlData(data);
        setisConverted(true);
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <HomeContainer>
      {!isConverted && (
        <ConvertForm convertUrl={convertUrl} setUrlInput={setUrlInput} />
      )}
      {isConverted && (
        <Converted
          urlData={urlData}
          setisConverted={setisConverted}
          apiUrl={apiUrl}
        />
      )}
    </HomeContainer>
  );
};

export default Home;
