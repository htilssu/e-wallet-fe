// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm } from "@mantine/form";
import dayjs from "dayjs";
import { Stepper } from "@mantine/core";

const steps = [
  {
    step: 1,
    description: "Nhập thông tin tài khoản",
  },
  {
    step: 2,
    description: "Xác thực Email",
  },
];

// eslint-disable-next-line react/prop-types
const RegistrationForm = ({ loginLink }) => {
  const form = useForm({
    name: "registerform",
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      fullName: "",
      phoneNumber: "",
      address: "",
      dob: dayjs(),
      gender: null,
      userName: "",
    },
  });

  return (
    <div className="form-box register p-4">
      <form action="">
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
          active={1}
        >
          {steps.map((step) => (
            <Stepper.Step
              key={step.step}
              label={"Bước " + step.step}
              description={step.description}
            />
          ))}
        </Stepper>
      </form>
    </div>
  );
};

export default RegistrationForm;
