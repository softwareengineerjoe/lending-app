import React, { useState } from "react";
import StepperContent from "./StepperContent";
import RegularStep1 from "./StepperContent/RegularStep1";
import RegularStep2 from "./StepperContent/RegularStep2";
import RegularStep3 from "./StepperContent/RegularStep3";
import Success from "./StepperContent/Success";
import { useNavigate } from "react-router-dom";

const stepperContent = [
  {
    title: "Personal Information",
    subtitle: "Please fill out your personal information.",
    content: <RegularStep1 />,
  },
  {
    title: "Billing Information",
    subtitle: "Please fill out the necessary information.",
    content: <RegularStep2 />,
  },
  {
    title: "Upload Supporting Documents",
    subtitle: "Please upload one valid ID to proceed with the application.",
    content: <RegularStep3 />,
  },
];

const Apply = () => {
  const navigate = useNavigate();

  const [openSuccess, setOpenSuccess] = useState(false);

  const [stepIndex, setStepIndex] = useState(0);

  const nextStep = () => {
    if (stepIndex < stepperContent.length - 1) {
      setStepIndex(stepIndex + 1);
    } else if (stepIndex === stepperContent.length - 1) {
      setOpenSuccess(true);
    }
  };
  const prevStep = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    } else if (stepIndex === 0) {
      navigate("/");
    }
  };
  return (
    <div className="max-w-2xl flex flex-col mx-auto w-full">
      <Success open={openSuccess} setOpen={setOpenSuccess} />
      <div className="container w-full p-8 pb-4 bg-container h-auto shadow rounded-lg">
        <div className="flex flex-row w-full place-content-between text-primary mb-4">
          {stepperContent.map((content, index) => {
            const { title, subtitle } = content;
            if (stepIndex === index) {
              return (
                <div
                  key={index}
                  className="flex md:flex-row flex-col justify-between w-full"
                >
                  <div className="flex flex-col text-secondary">
                    <p className="text-xl font-bold">{title}</p>
                    <p className="mt-1 text-sm font-base hidden md:block">
                      {subtitle}
                    </p>
                  </div>
                  <div className="font-thin">Step {stepIndex + 1} of 3</div>
                </div>
              );
            }
          })}
        </div>
        <div className="flex flex-row gap-4">
          {stepperContent.map((_, index) => {
            return (
              <div
                key={index}
                className={`h-2  w-1/3 ${
                  index === stepIndex ? "bg-primary" : "bg-white"
                } ${index - 1 < stepIndex && "complete"} rounded-full`}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="container w-full p-8 bg-white my-4 h-auto shadow text-secondary rounded-lg">
        {stepperContent.map((cs, index) => {
          if (stepIndex === index) {
            return <StepperContent {...cs} />;
          }
        })}
        <div className="flex flex-col md:flex-row justify-end mt-8 gap-4 text-sm">
          <button
            onClick={prevStep}
            className="px-7 py-2 text-xs h-fit hover:opacity-90 border border-container bg-container rounded text-primary"
          >
            {stepIndex === 0 ? "Cancel" : "Back"}
          </button>
          <button
            onClick={nextStep}
            className="px-7 py-2 text-xs h-fit hover:opacity-90 border border-primary bg-primary rounded text-white"
          >
            {stepIndex < stepperContent.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apply;
