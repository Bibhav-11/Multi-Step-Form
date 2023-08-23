import "./Confirm.css";
import FormWrapper from "../components/FormWrapper";
import { addons } from "./Addons";
import { plans } from "./PlanSelect";

import { useFormContext } from "react-hook-form";

const capitalise = (str) => str[0].toUpperCase() + str.slice(1);

function Confirm() {
  const { setValue, watch } = useFormContext();
  const billing = watch("billing");
  const plan = watch("plan");
  const addon = watch("addon");

  const currentPlan = plans.find((p) => p.value === plan);
  const totalPrice = addon
    ? currentPlan.pricing[billing] +
      addon.reduce((acc, a) => acc + addons[a][billing], 0)
    : currentPlan.pricing[billing];

  const renderedAddons =
    addon &&
    addon.map((a) => {
      return (
        <div key={a} className="summary__group">
          <div>{addons[a].title}</div>
          <div className="summary__pricing">
            +${addons[a][billing]}/{billing === "monthly" ? "mo" : "yr"}
          </div>
        </div>
      );
    });

  //   console.log(plans[value.plan]);

  return (
    <FormWrapper
      title="Finishing Up"
      details="Double-check everything looks OK before confirming."
    >
      <div className="pricing-summary">
        <div className="summary__group">
          <div>
            <div>
              {currentPlan.title} ({capitalise(billing)})
            </div>
            <button
              type="button"
              onClick={() =>
                setValue(
                  "billing",
                  billing === "monthly" ? "yearly" : "monthly"
                )
              }
            >
              Change
            </button>
          </div>
          <div className="summary__pricing">
            ${currentPlan.pricing[billing]}/
            {billing === "monthly" ? "mo" : "yr"}
          </div>
        </div>

        {renderedAddons}
      </div>

      <div className="pricing-total">
        <div>Total (per {billing === "monthly" ? "month" : "year"})</div>
        <div className="pricing">
          +${totalPrice}/{billing === "monthly" ? "mo" : "yr"}
        </div>
      </div>
    </FormWrapper>
  );
}

export default Confirm;
