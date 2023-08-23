import "./Form.css";
import Addons from "../form-steps/Addons";
import PersonalInfo from "../form-steps/PersonalInfo";
import PlanSelect from "../form-steps/PlanSelect";
import Confirm from "../form-steps/Confirm";
import useMultiStepForm from "./useMultiStepForm";
import StepSideBar from "./StepSidebar";
import Success from "../form-steps/Success";
import { plans } from "../form-steps/PlanSelect";
import { addons } from "../form-steps/Addons";

import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

function Form() {
  const [animation, setAnimation] = useState("slide-in");

  const methods = useForm({
    defaultValues: {
      billing: "monthly",
      plan: "arcade",
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  const {
    steps,
    step,
    currentStepIndex,
    prev,
    next,
    isFirstStep,
    isLastStep,
    isActualLastStep,
  } = useMultiStepForm([
    <PersonalInfo />,
    <PlanSelect />,
    <Addons />,
    <Confirm />,
    <Success />,
  ]);

  const onSubmit = (data) => {
    if (isLastStep) {
      const customPlan = plans.find((p) => p.value === data.plan);
      const customAddon = data.addon?.map((a) => addons[a]) || [];
      data = { ...data, plan: customPlan, addon: customAddon };
      console.log(data);
    }
    if (!isActualLastStep) {
      next();
      return;
    }
  };

  return (
    <>
      <div className="form-sidebar__mobile step-sidebar__container">
        {steps.map((s, index) => {
          if (index === steps.length - 1) return;
          return (
            <div
              key={index}
              className={`step-index ${
                index === currentStepIndex ? "active" : ""
              }`}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
      <div className="form-container">
        <div className="form-sidebar">
          <StepSideBar steps={steps} step={currentStepIndex} />
        </div>
        <FormProvider {...methods}>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="step">
            {currentStepIndex + 1}/{steps.length}
          </div> */}
            <div key={steps.indexOf(step)} className={`form-step ${animation}`}>
              {step}
            </div>
            {!isActualLastStep && (
              <div className="form__buttons">
                <button
                  className="back"
                  type="button"
                  onClick={() => {
                    setAnimation("slide-out");
                    prev();
                  }}
                >
                  {!isFirstStep && "Go Back"}
                </button>
                <button
                  onClick={() => setAnimation("slide-in")}
                  className={`next ${isLastStep ? "last" : ""}`}
                  type="submit"
                >
                  {isLastStep ? "Confirm" : "Next Step"}
                </button>
              </div>
            )}
          </form>
        </FormProvider>
      </div>
    </>
  );
}

export default Form;
