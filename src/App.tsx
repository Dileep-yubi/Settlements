import React, { useState } from "react";
import "./App.css";
import { EmiListComponent } from "./Components/EmiListComponent/EmiListComponent";
import { FooterComponent } from "./Components/FooterComponent";
import { Header } from "./Components/Header/Header";

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
  ];

  return (
    <div className="rootContainer">
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
        isNextDisabled={!selected || currentStep === steps.length - 1}
        isBackDisabled={!currentStep || false}
      />
    </div>
  );
};

export default App;
