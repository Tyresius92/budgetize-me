import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

//jest.mock("../components/Navbar", () => () => <div>This is the Navbar</div>);

describe("App", () => {
  it("renders learn react link", () => {
    const { getByText } = render(<App />);
    const mainDiv = getByText("Hello world");
    expect(mainDiv).toBeInTheDocument();
  });

  it("contains the Navbar", () => {
    const { getByText } = render(<App />);

    expect(getByText("This is the appbar")).toBeTruthy();
  });
});
