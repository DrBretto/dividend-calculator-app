import React from "react";
import { mount, configure } from "enzyme";
import { MemoryRouter } from "react-router";
import Adapter from "enzyme-adapter-react-16";

import NavWindow from "./NavWindow";
import MainWindow from "./MainWindow";
import DetailsWindow from "./DetailsWindow";
import NotFoundPage from "./NotFoundPage";
import App from "./App";
import Footer from "./Footer";

configure({ adapter: new Adapter() });
test("renders main routes", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(NavWindow)).toHaveLength(1);
  expect(wrapper.find(MainWindow)).toHaveLength(1);
  expect(wrapper.find(DetailsWindow)).toHaveLength(1);
  expect(wrapper.find(Footer)).toHaveLength(1);
  expect(wrapper.find(NotFoundPage)).toHaveLength(0);
});
