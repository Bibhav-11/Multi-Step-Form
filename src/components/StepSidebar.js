import "./StepSideBar.css";

const title = ["Your Info", "Select Plan", "Add-ons", "Summary"];

function StepSideBar({ step, steps }) {
  const renderedSteps = steps.map((s, index) => {
    if (index === steps.length - 1) return;
    return (
      <div key={index} className="step-group">
        <div className={`step-index ${index === step ? "active" : ""}`}>
          {index + 1}
        </div>
        <div className="step-details">
          <div className="step-number">Step {index + 1}</div>
          <div className="step-title">{title[index]}</div>
        </div>
      </div>
    );
  });
  return <div className="step-sidebar__container">{renderedSteps}</div>;
}

export default StepSideBar;
