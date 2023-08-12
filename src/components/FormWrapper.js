import "./FormWrapper.css";

function FormWrapper({ title, details, children }) {
  return (
    <>
      <h2 className="wrapper__title">{title}</h2>
      <p className="wrapper__details">{details}</p>
      {children}
    </>
  );
}

export default FormWrapper;
