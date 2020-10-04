/* eslint-disable no-unused-vars */
import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";

import RegistrationForm from "./RegistrationForm";

configure({ adapter: new Adapter() });
test("renders without crashing", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <RegistrationForm />
    </MemoryRouter>
  );
});
