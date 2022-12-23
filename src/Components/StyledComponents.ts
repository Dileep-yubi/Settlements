import styled from "styled-components";
import { ButtonProps, FlexDivProps } from "./types";

export const H1 = styled.h1`
  font-size: 18px;
  text-align: center;
  margin: 0px;
  font-weight: 600;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid #d6d3d3;
`;

export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props: FlexDivProps) => props.flexDirection || "row"};
  justify-content: ${(props: FlexDivProps) =>
    props.justifyContent || "space-between"};
  align-items: ${(props: FlexDivProps) => props.alignItems || "center"};
  gap: 5px;
  line-height: 26px;
`;

export const Footer = styled.footer`
  bottom: 0px;
  padding: 10px;
  box-sizing: border-box;
  background: #fff;
  width: inherit;
`;

export const StyledButton = styled.button`
  font-size: 16px;
  padding: 12px 40px;
  border: 1px solid
    ${(props: ButtonProps) => (props.disabled ? "white" : "#633ea5")};
  border-radius: 12px;
  color: ${(props: ButtonProps) => (props.disabled ? "black" : "#633ea5")};
  color: ${(props: ButtonProps) =>
    props.primary ? (props.disabled ? "#7f7c7c" : "white") : "#633ea5"};
  background: ${(props: ButtonProps) =>
    props.primary ? (props.disabled ? "#efefef" : "#633ea5") : "#fff"};
  :hover {
    cursor: ${(props: ButtonProps) => (props.disabled ? "not-allowed" : "")};
  }
`;
