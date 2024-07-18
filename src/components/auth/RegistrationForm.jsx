// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm } from "@mantine/form";
import dayjs from "dayjs";
import { PasswordInput, Stepper, TextInput } from "@mantine/core";
import "@mantine/dates/styles.css";
import { DateInput, DatePickerInput } from "@mantine/dates";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

dayjs("05/02/2024 01:02:03 PM -05:00", "DD/MM/YYYY HH:mm:ss A Z");

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
    name: "registerForm",
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
    <div className="form-box register p-4 flex items-center min-h-screen justify-center">
      <form className="w-2/3 bg-white p-4 rounded-lg" action="">
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
        <div>
          <TextInput placeholder="Email" label="Email" required />
          <PasswordInput
            placeholder="Mật khẩu"
            label="Mật khẩu"
            type="password"
            required
          />
          <PasswordInput
            placeholder="Nhập lại mật khẩu"
            label="Nhập lại mật khẩu"
            required
          />

          <TextInput placeholder="Họ" label="Họ" required />
          <TextInput placeholder="Tên" label="Tên" required />
          <DateInput placeholder="Ngày sinh" label="Ngày sinh" required />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
