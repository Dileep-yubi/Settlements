import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  margin: auto;
  height: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  gap: 0.6rem;
  height: 30%;
`;

export const BankTitle = styled.div`
  font-family: Semibold;
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  text-align: left;
`;

export const EMITitle = styled.div`
  font-family: Semibold;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  text-align: left;
`;

export const PaymentDetailCard = styled.div`
  background: #fff;
  height: 70%;
  border-radius: 16px 16px 0 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Title = styled.div`
  color: #4a5567;
  font-size: 16px;
  font-family: Semibold;
`;

export const AccountDetailsLabel = styled.div`
  font-family: Bold;
  margin-top: 24px;
  font-size: 12px;
  color: #4a5567;
  &:first-child {
    margin-top: 0;
  }
`;

export const ReviewTitle = styled.div`
  font-size: 13px;
  color: #1b2025;
  font-family: Light;
`;

export const Revised = styled.div`
  font-size: 14px;
  color: #1b2025;
  font-family: Light;
  text-decoration: underline;
`;

export const BackButton = styled("button")`
  border: 1px solid #8714d4;
  width: 8rem;
  height: 3.2rem;
  border-radius: 8px;
  background-color: white;
  font-size: 18px;
`;

export const SubmitButton = styled("button")`
  border: 1px solid #8714d4;
  width: 8rem;
  height: 3.2rem;
  border-radius: 8px;
  background-color: rgb(135, 20, 212);
  color: white;
  font-family: Bold;
  font-size: 18px;
`;

export const Card = styled("div")`
  background-color: white;
  border: 1px solid #8714d4;
  padding: 8px;
  border-radius: 12px;
`;
