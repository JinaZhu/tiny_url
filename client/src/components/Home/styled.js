import styled, { css } from "styled-components";

const alignCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #6c98c6;
  ${alignCenter}
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

export const ConvertButton = styled.button`
  color: #fff;
  background-color: #28c98b;
  border: none;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 10px;
  padding: 15px 30px;
  margin-top: 15px;
`;
