import PaymentSummary from "components/PaymentSummary";
import GlobalStyle from "GlobalStyles";
import React, { useState } from "react";
import "./App.css";
import { EmiListComponent } from "./components/EmiListComponent/EmiListComponent";
import { FooterComponent } from "./components/FooterComponent";
import { Header } from "./components/Header/Header";

const App = () => {
  const [selected, setSelected] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps = [
    {
      component: (
        <EmiListComponent
          selectedEmi={selected}
          handleSelected={(index) => setSelected(index)}
        />
      ),
    },
    {
      component: <PaymentSummary />,
    },
  ];

  return (
    <div className="rootContainer">
      <GlobalStyle />
      <Header />
      {steps.map(
        (step, index) =>
          index === currentStep && (
            <React.Fragment key={index}>{step.component}</React.Fragment>
          )
      )}
      <FooterComponent
        onNext={() => setCurrentStep((prev: number) => prev + 1)}
        onPrev={() => setCurrentStep((prev: number) => prev - 1)}
        isNextDisabled={!selected}
        isBackDisabled={!currentStep}
      />
    </div>
  );
};

export default App;
