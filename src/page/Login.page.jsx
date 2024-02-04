import React, { useState } from "react";
import {
  ContainerComponents,
  FormComponents,
  ButtonComponents,
} from "../components";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInputChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <ContainerComponents>
      <div className="center">
        <div className="w-2/6 h-auto">
          <h1 className="font-serif text-2xl text-center">
            Login Your Contact
          </h1>
          <form onSubmit={handleSubmit} className="space-y-7 mt-5">
            <FormComponents
              value={formData.email}
              onChange={handleInputChange}
              name={"email"}
              type={"email"}
              label={"Enter Your Email"}
              placeholder="example@gmail.com"
            />
            <FormComponents
              value={formData.password}
              onChange={handleInputChange}
              name={"password"}
              type={"password"}
              label={"Password"}
            />
          </form>
          <ButtonComponents style={"!rounded-lg"} type="submit">
            Login
          </ButtonComponents>
        </div>
      </div>
    </ContainerComponents>
  );
};

export default LoginPage;
