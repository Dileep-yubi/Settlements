import React from "react";
import { FlexDiv, Footer, StyledButton } from "./StyledComponents";

interface FooterComponentProps {
  isBackDisabled?: boolean;
  isNextDisabled?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
}

export const FooterComponent = ({
  onPrev,
  isBackDisabled,
  onNext,
  isNextDisabled,
}: FooterComponentProps) => {
  return (
    <Footer>
      <FlexDiv justifyContent="space-around">
        <StyledButton onClick={() => onPrev?.()} disabled={isBackDisabled}>
          {isBackDisabled ? "Not Now" : "Back"}
        </StyledButton>
        <StyledButton
          onClick={() => onNext?.()}
          primary
          disabled={isNextDisabled}
        >
          Submit
        </StyledButton>
      </FlexDiv>
    </Footer>
  );
};
