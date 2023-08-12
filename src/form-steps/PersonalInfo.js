import "./PersonalInfo.css";
import { Input } from "../components/FormComponents";
import FormWrapper from "../components/FormWrapper";

function PersonalInfo({ register, error }) {
  return (
    <FormWrapper
      title="Personal Info"
      details="Please provide your name, email address and phone number."
    >
      <div className="input-forms">
        <Input
          error={error.name}
          label="Name"
          placeholder="e.g. Stephen King"
          {...register("name")}
        />
        <Input
          error={error.email}
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          {...register("email")}
        />
        <Input
          error={error.phone}
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          {...register("phone")}
        />
      </div>
    </FormWrapper>
  );
}

export default PersonalInfo;
