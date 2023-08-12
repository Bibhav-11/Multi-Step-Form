import { useState } from "react";

const useMultiStepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const prev = () => {
    if (currentStepIndex === 0) return;
    setCurrentStepIndex((index) => index - 1);
  };

  const next = () => {
    if (currentStepIndex === steps.length - 1) return;
    setCurrentStepIndex((index) => index + 1);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    prev,
    next,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 2,
    isActualLastStep: currentStepIndex === steps.length - 1,
  };
};

export default useMultiStepForm;
