import React from "react";
import App from "./App";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";
import LoginForm from "../components/Login/LoginForm";

configure({ adapter: new Adapter() });
test("renders login form", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/login"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(LoginForm)).toHaveLength(1);
});
test("does not render login form", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(LoginForm)).toHaveLength(0);
});
