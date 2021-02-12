import styled, { css } from "styled-components";

const alignCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContainer = styled.div`
  ${alignCenter};
  height: 80vh;
`;

export const FormContainer = styled.form`
  background-color: white;
  ${alignCenter};
  flex-direction: column;
  padding: 20px;
  border-radius: 0.25rem;
`;

export const FormText = styled.p`
  font-weight: 700;
  font-size: 14px;
  font-family: Montserrat, sans-serif;
`;

export const Input = styled.input`
  border-radius: 10px;
  font-size: 16px;
  color: #42cf98;
  font-weight: 500;
  border: 1px solid #e5e5e5;
  padding: 16px 10px;
  height: auto;
  width: 300px;
  outline: none;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #28c98b;
  border: 1px solid #28c98b;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 10px;
  padding: ${(props) => props.padding || "15px 30px"};
  margin-top: 15px;
  outline: none;
  cursor: pointer;

  &:hover {
    filter: grayscale(60%);
  }
`;

export const ConvertedContainer = styled.div`
  ${alignCenter};
  padding: 20px;
  background-color: white;
  flex-direction: column;
  border-radius: 0.25rem;
`;

export const UrlContainer = styled.div`
  border-radius: 10px;
  font-size: 16px;
  color: #42cf98;
  font-weight: 500;
  border: 1px solid #e5e5e5;
  padding: 16px 10px;
  height: auto;
  width: 400px;
  cursor: ${(props) => props.cursor};
  position: relative;
`;

export const RedirectLink = styled.a`
  color: white;
  text-decoration: none;
`;

export const ButtonContainer = styled.div`
  ${alignCenter};
  justify-content: space-between;
  width: 375px;
`;
