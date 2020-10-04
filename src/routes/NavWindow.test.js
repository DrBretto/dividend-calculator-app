import React from "react";
import { MemoryRouter } from "react-router";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";

configure({ adapter: new Adapter() });
test("renders login page, but not registration page", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/login"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(LoginPage)).toHaveLength(1);
  expect(wrapper.find(RegistrationPage)).toHaveLength(0);
});
test("renders registrationPage, not LoginPage", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/register"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(LoginPage)).toHaveLength(0);
  expect(wrapper.find(RegistrationPage)).toHaveLength(1);
});
