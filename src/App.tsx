import React, { useState } from "react";
import "./App.css";
import { EMIPlanComponent } from "./Components/EmiPlanComponent";
import { Money } from "./Components/Money";
import {
  FlexDiv,
  Footer,
  H1,
  StyledButton,
} from "./Components/StyledComponents";
import Summary from "./Components/Summary";

const App = () => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <div className="rootContainer">
      <header className="headerContainer">
        <H1>SMARTBank</H1>
        <FlexDiv>
          <img
            src="https://cardinsider.com/wp-content/uploads/2021/10/slider.png.webp"
            alt="Fallback"
            height="150px"
            width="50%"
          />
          <div>Convert your outstanding amount into EMIs with ease!</div>
        </FlexDiv>
      </header>
      <div className="emiContentContainer">
        <H1>Choose EMI plan</H1>
        <div style={{ padding: "20px" }}>
          <Summary
            title="Total outstanding amount"
            value={
              <span style={{ fontWeight: "bolder" }}>
                <Money amount={{ currency: "USD", value: 10000 }} />
              </span>
            }
            isRadio={false}
          />
        </div>
        <div className="flex-container">
          <EMIPlanComponent
            selected={selected}
            handleSelected={(index) => setSelected(index + 1)}
          />
        </div>
      </div>
      <Footer>
        <FlexDiv>
          <StyledButton>Not Now</StyledButton>
          <StyledButton primary disabled={!selected}>
            Submit
          </StyledButton>
        </FlexDiv>
      </Footer>
    </div>
  );
};

export default App;
