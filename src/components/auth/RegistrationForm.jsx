import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import dayjs from "dayjs";
import { Button, PasswordInput, Stepper, TextInput } from "@mantine/core";
import "@mantine/dates/styles.css";
import customParseFormat from "dayjs/plugin/customParseFormat";
import OtpVerification from "../otpverify/OTPVerification.jsx";
import InputInformationForm from "./InputInformationForm.jsx";

dayjs.extend(customParseFormat);

dayjs("05/02/2024 01:02:03 PM -05:00", "DD/MM/YYYY HH:mm:ss A Z");

const RegistrationForm = ({ loginLink }) => {
  const [steps, setSteps] = useState([
    {
      step: 1,
      description: "Nhập thông tin",
    },
    {
      step: 2,
      description: "Xác thực email",
    },
  ]);

  function onNextHandle() {
    setCurrentStep(currentStep + 1);
  }

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="form-box register md:p-4 h-0 flex items-center min-h-screen justify-center">
      <div
        className={
          "w-full bg-white sm:bg-transparent h-full flex flex-col justify-center items-center"
        }
      >
        <div className={"bg-white sm:w-7/12 rounded-xl  md:w-6/12 lg:w-4/12"}>
          <div className="hidden md:flex p-4 flex-col">
            <Stepper
              styles={{
                stepIcon: {
                  backgroundColor: "white",
                },
                stepCompletedIcon: {
                  backgroundColor: "#40c057",
                  borderRadius: "100%",
                },
              }}
              color="green"
              active={currentStep}
            >
              {steps.map((step) => (
                <Stepper.Step
                  key={step.step}
                  label={"Bước " + step.step}
                  description={step.description}
                />
              ))}
            </Stepper>
          </div>
          <div className={"p-4"}>{<InputInformationForm />}</div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
