import styled from "styled-components";
import { ButtonProps, FlexDivProps } from "./types";

export const H1 = styled.h1`
  font-size: 1.2rem;
  text-align: center;
  margin: 0px;
  font-weight: 600;
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  border-top: 0.1rem solid #d6d3d3;
`;

export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props: FlexDivProps) => props.flexDirection || "row"};
  justify-content: ${(props: FlexDivProps) =>
    props.justifyContent || "space-between"};
  align-items: ${(props: FlexDivProps) => props.alignItems || "center"};
  gap: 0.5rem;
  line-height: 2.5rem;
`;

export const Footer = styled.footer`
  padding: 1rem;
  box-sizing: border-box;
  background: #fff;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.8rem 3.6rem;
  border: 1px solid
    ${(props: ButtonProps) => (props.disabled ? "white" : "#633ea5")};
  border-radius: 12px;
  color: ${(props: ButtonProps) => (props.disabled ? "black" : "#633ea5")};
  color: ${(props: ButtonProps) =>
    props.primary ? (props.disabled ? "#7f7c7c" : "white") : "#633ea5"};
  background: ${(props: ButtonProps) =>
    props.primary ? (props.disabled ? "#efefef" : "#633ea5") : "#fff"};
`;
