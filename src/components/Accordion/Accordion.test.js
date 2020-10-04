import React from "react";
import Accordion from "./Accordion";
import Strategy from "../../components/Strategies/Strategy";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";

configure({ adapter: new Adapter() });
test("renders", () => {
  mount(
    <MemoryRouter initialEntries={["/"]}>
      <Accordion >
        <Strategy />
        <Strategy />
        <Strategy />
      </Accordion>
    </MemoryRouter>
  );
});
