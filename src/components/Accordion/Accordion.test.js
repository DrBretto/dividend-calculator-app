import React from "react";
import { MemoryRouter } from "react-router";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Strategy from "../../components/Strategies/Strategy";
import Accordion from "./Accordion";

configure({ adapter: new Adapter() });
test("renders", () => {
  mount(
    <MemoryRouter initialEntries={["/"]}>
      <Accordion>
        <Strategy />
        <Strategy />
        <Strategy />
      </Accordion>
    </MemoryRouter>
  );
});
