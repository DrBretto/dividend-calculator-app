/* eslint-disable no-unused-vars */
import React from "react";
import RegistrationForm from "./RegistrationForm";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";

configure({ adapter: new Adapter() });
test("renders without crashing", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <RegistrationForm />
    </MemoryRouter>
  );
});
