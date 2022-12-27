import PaymentSummary from "components/PaymentSummary";
import React, { useState } from "react";
import "./App.css";
import { PaymentDetailCard } from "components/PaymentSummary/PaymentSummary.styled";
import { headerComponent } from "testData";
import RequestDone from "components/RequestDone.component";
import { EmiListComponent } from "components/EmiListComponent/EmiListComponent";
import GlobalStyle from "GlobalStyles";
import { Header } from "components/Header/Header";
import { FooterComponent } from "components/FooterComponent";
const App = () => {
  const [selected, setSelected] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps = [
    {
      component: (
        <EmiListComponent
          selectedEmi={selected}
          handleSelected={(index) => setSelected(index)}
          headerComponent={headerComponent}
        />
      ),
    },
    {
      component: <PaymentSummary plan={headerComponent[selected - 1]} />,
    },
    {
      component: <RequestDone />,
    },
  ];

  return (
    <div className="rootContainer">
      <GlobalStyle />
      <Header />
      <PaymentDetailCard>
        {steps.map(
          (step, index) =>
            index === currentStep && (
              <React.Fragment key={index}>{step.component}</React.Fragment>
            )
        )}
        {currentStep !== 2 && (
          <FooterComponent
            onNext={() => setCurrentStep((prev: number) => prev + 1)}
            onPrev={() => setCurrentStep((prev: number) => prev - 1)}
            isNextDisabled={!selected}
            isBackDisabled={currentStep === 0}
          />
        )}
      </PaymentDetailCard>
    </div>
  );
};

export default App;
