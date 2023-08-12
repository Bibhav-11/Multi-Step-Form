import { Checkbox } from "../components/FormComponents";
import FormWrapper from "../components/FormWrapper";

export const addons = {
  onlineService: {
    title: "Online Service",
    monthly: 1,
    yearly: 10,
  },
  largerStorage: {
    title: "Larger Storage",
    monthly: 2,
    yearly: 20,
  },
  customizableProfile: {
    title: "Customizable Profile",
    monthly: 2,
    yearly: 20,
  },
};

function Addons({ register, watch }) {
  const billing = watch("billing");
  return (
    <FormWrapper
      title="Pick add-ons"
      details="Add-ons help enhance your gaming experience."
    >
      <Checkbox
        billing={billing}
        addon={addons}
        title="Online Service"
        details="Access to multiplayer games"
        value="onlineService"
        {...register("addon")}
      />

      <Checkbox
        billing={billing}
        addon={addons}
        title="Larger Storage"
        details="Extra 1TB of cloud save"
        value="largerStorage"
        {...register("addon")}
      />

      <Checkbox
        billing={billing}
        addon={addons}
        title="Customizable Profile"
        details="Custom theme on your profile"
        value="customizableProfile"
        {...register("addon")}
      />
    </FormWrapper>
  );
}

export default Addons;
