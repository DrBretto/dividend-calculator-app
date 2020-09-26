import RegistrationForm from "../components/Login/RegistrationForm";
import React from "react";
import App from "./App";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";

configure({ adapter: new Adapter() });
test("renders login page, but not registration page", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/register"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(RegistrationForm)).toHaveLength(1);
});
