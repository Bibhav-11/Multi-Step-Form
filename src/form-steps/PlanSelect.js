import "./PlanSelect.css";
import { Radio, Toggle } from "../components/FormComponents";
import FormWrapper from "../components/FormWrapper";

import { useFormContext } from "react-hook-form";

export const plans = [
  {
    value: "arcade",
    title: "Arcade",
    pricing: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    value: "advanced",
    title: "Advanced",
    pricing: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    value: "pro",
    title: "Pro",
    pricing: {
      monthly: 15,
      yearly: 150,
    },
  },
];

function PlanSelect() {
  const { register, watch } = useFormContext();
  const billing = watch("billing");

  const renderedPlans = plans.map((plan) => {
    return (
      <Radio
        billing={billing}
        key={plan.value}
        src={require(`../assets/images/icon-${plan.value}.svg`)}
        plan={plan}
        value={plan.value}
        {...register("plan")}
      />
    );
  });

  return (
    <FormWrapper
      title="Select your plan"
      details="You have the option of monthly or yearly billing."
    >
      <div className="radio-forms">{renderedPlans}</div>

      <Toggle
        billing={billing}
        first="monthly"
        second="yearly"
        {...register("billing")}
      />
    </FormWrapper>
  );
}

export default PlanSelect;
