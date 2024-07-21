import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import dayjs from "dayjs";
import { Button, PasswordInput, Stepper, TextInput } from "@mantine/core";
import "@mantine/dates/styles.css";
import { DateInput } from "@mantine/dates";
import customParseFormat from "dayjs/plugin/customParseFormat";
import OtpVerification from "../otpverify/OTPverification.jsx";

dayjs.extend(customParseFormat);

dayjs("05/02/2024 01:02:03 PM -05:00", "DD/MM/YYYY HH:mm:ss A Z");

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
    validate: {
      userName: (email) => {
        if (email === "") {
          return "Hãy nhập email";
        }
      },
      password: (pass) => {
        if (pass === "") {
          return "Yêu cầu điền mât khẩu";
        }
      },
      lastName: (lastName) => {
        if (lastName === "") {
          return "Không được để trống";
        }
      },
      firstName: (firstName) => {
        if (firstName === "") {
          return "Không được để trống";
        }
      },
    },
  });

  function onNextHandle() {
    // form.validate();
    setStep(step + 1);
  }

  const VerifyEmail = ({ email }) => {
    return (
      <div>
        <div>
          <OtpVerification to={email} />
          <Button onclick={onNextHandle} />
        </div>
      </div>
    );
  };

  const InputInformationForm = () => {
    return (
      <form className="w-full bg-white p-4 rounded-lg" action="">
        <div>
          <div className={"flex gap-3"}>
            <TextInput
              className={"w-full"}
              {...form.getInputProps("lastName")}
              placeholder="Họ"
              size={"md"}
              label="Họ"
              required
            />
            <TextInput
              className={"w-full"}
              {...form.getInputProps("firstName")}
              placeholder="Tên"
              size={"md"}
              label="Tên"
              required
            />
          </div>
          <TextInput
            placeholder="Email"
            {...form.getInputProps("email")}
            label="Email"
            size={"md"}
            required
          />
          <PasswordInput
            placeholder="Mật khẩu"
            {...form.getInputProps("password")}
            label="Mật khẩu"
            type="password"
            size={"md"}
            required
          />
          <PasswordInput
            placeholder="Nhập lại mật khẩu"
            {...form.getInputProps("confirmPassword")}
            label="Nhập lại mật khẩu"
            type="password"
            size={"md"}
            required
          />

          <DateInput
            size={"md"}
            placeholder="Ngày sinh"
            {...form.getInputProps("dob")}
            label="Ngày sinh"
            required
          />
        </div>
        <div className={"flex justify-end mt-3"}>
          <Button onClick={onNextHandle} type={"submit"}>
            Đăng ký
          </Button>
        </div>
      </form>
    );
  };

  const [step, setStep] = useState(0);

  const steps = [
    {
      step: 1,
      description: "Nhập thông tin tài khoản",
      element: <InputInformationForm />,
    },
    {
      step: 2,
      description: "Xác thực Email",
      element: <VerifyEmail email={form.values.email} />,
    },
  ];

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
              active={step}
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
          <div className={"p-4"}>{steps[step].element}</div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
