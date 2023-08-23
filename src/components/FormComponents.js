import "../form-steps/PersonalInfo.css";
import "./Toggle.css";
import "./CheckBox.css";
import { forwardRef } from "react";

// export const Input = forwardRef(
//   ({ label, placeholder, name, onChange, onBlur, error }, ref) => (
//     <div className="form-group error">
//       <div className="form__label">
//         <label>{label}</label>
//         <div className="error">{error && error.message}</div>
//       </div>
//       <input
//         className={`${error ? "error" : ""}`}
//         name={name}
//         placeholder={placeholder}
//         ref={ref}
//         onChange={onChange}
//         onBlur={onBlur}
//         type="text"
//       />
//     </div>
//   )
// );

export const Input = forwardRef((props, ref) => (
  <div className="form-group error">
    <div className="form__label">
      <label>{props.label}</label>
      <div className="error">{props.error && props.error.message}</div>
    </div>
    <input
      ref={ref}
      className={props.error ? "error" : ""}
      {...props}
      type="text"
    />
  </div>
));

export const Checkbox = forwardRef(
  ({ addon, billing, title, details, value, label, ...rest }, ref) => (
    <div className="form-group checkbox-container">
      <input type="checkbox" value={value} {...rest} ref={ref} id={value} />
      <label htmlFor={value}>
        <div className="checkbox">
          <div className="checkbox__container">
            <div className="checkbox__stem"></div>
            <div className="checkbox__kick"></div>
          </div>
        </div>
        <div className="checkbox__description">
          <div className="checkbox__title">{title}</div>
          <div className="checkbox__details">{details}</div>
        </div>
        <div className="checkbox__pricing">{`+$${addon[value][billing]}/${
          billing === "yearly" ? "yr" : "mo"
        }`}</div>
      </label>
    </div>
  )
);

export const Radio = forwardRef(
  ({ plan, value, src, billing, ...rest }, ref) => (
    <div className="form-group">
      <input type="radio" value={value} {...rest} ref={ref} id={value} />
      <label htmlFor={value}>
        <img className="plan__icon" src={src} />

        <div>
          <div className="plan__title">{plan.title}</div>
          <div className="plan__pricing">{`$${plan.pricing[billing]}/${
            billing === "monthly" ? "mo" : "yr"
          }`}</div>
          <div
            className={`plan__free ${billing === "monthly" ? "hide" : ""}`}
          >{`${Math.ceil(
            (plan.pricing.monthly * 12 - plan.pricing.yearly) /
              plan.pricing.monthly
          )} months free`}</div>
        </div>
      </label>
    </div>
  )
);

export const Toggle = forwardRef(
  ({ billing, first, second, name, onChange, onBlur }, ref) => {
    return (
      <div className="form-group form-group__toggle">
        <label className={billing === first ? "active" : ""} htmlFor={first}>
          {first[0].toUpperCase() + first.slice(1)}
        </label>

        <div className="toggle-container">
          <input
            type="radio"
            value={first}
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            id={first}
          />
          <input
            type="radio"
            value={second}
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            id={second}
          />
          <label className="label" htmlFor={first}></label>
          <label className="label" htmlFor={second}></label>
          <div className="toggle-circle"></div>
        </div>
        <label className={billing === second ? "active" : ""} htmlFor={second}>
          {second[0].toUpperCase() + second.slice(1)}
        </label>
      </div>
    );
  }
);
