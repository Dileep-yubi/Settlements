import React from "react";
import { FlexDiv, Footer, StyledButton } from "./StyledComponents";

interface FooterComponentProps {
  isBackDisabled?: boolean;
  isNextDisabled?: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export const FooterComponent = (props: FooterComponentProps) => {
  return (
    <Footer>
      <FlexDiv>
        <StyledButton
          onClick={() => props.onPrev()}
          disabled={props.isBackDisabled}>
          Not Now
        </StyledButton>
        <StyledButton
          onClick={() => props.onNext()}
          primary
          disabled={props.isNextDisabled}>
          Submit
        </StyledButton>
      </FlexDiv>
    </Footer>
  );
};
