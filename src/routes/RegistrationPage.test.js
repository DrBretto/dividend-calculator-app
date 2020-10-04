import React from "react";
import { MemoryRouter } from "react-router";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";
import RegistrationForm from "../components/Login/RegistrationForm";

configure({ adapter: new Adapter() });
test("renders login page, but not registration page", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/register"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(RegistrationForm)).toHaveLength(1);
});
