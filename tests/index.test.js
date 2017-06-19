import React from "react";
import { shallow } from "enzyme";

import Worm from "../src/";

it("renders correctly with only required props", () => {
  const element = shallow(
    <Worm
      scores={[4, 8, 15, 16, 23, 42]}
      min={0}
      max={50}
    />
  );
  expect(element.getNodes()).toMatchSnapshot();
});

it("supports custom labels", () => {
  const element = shallow(
    <Worm
      scores={[4, 8, 15, 16, 23, 42]}
      min={0}
      max={50}
      labels={["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"]}
    />
  );
  expect(element.getNodes()).toMatchSnapshot();
});

it("supports custom colors", () => {
  const element = shallow(
    <Worm
      scores={[4, 8, 15, 16, 23, 42]}
      min={0}
      max={50}
      bgdColor="#253b6b"
      colors={["#c6e48b", "#7bc96f", "#196127"]}
    />
  );
  expect(element.getNodes()).toMatchSnapshot();
});

it("supports custom styles", () => {
  const element = shallow(
    <Worm
      scores={[4, 8, 15, 16, 23, 42]}
      min={0}
      max={50}
      styles={{ color: "white", fontSize: "1.4em" }}
    />
  );
  expect(element.getNodes()).toMatchSnapshot();
});

it("supports custom classNames", () => {
  const element = shallow(
    <Worm
      scores={[4, 8, 15, 16, 23, 42]}
      min={0}
      max={50}
      className="Worm--custom"
    />
  );
  expect(element.getNodes()).toMatchSnapshot();
});

it("supports negative scores", () => {
  const element = shallow(
    <Worm
      scores={[-5, -2, 0, 2, 5]}
      min={-5}
      max={5}
    />
  );
  expect(element.getNodes()).toMatchSnapshot();
});
