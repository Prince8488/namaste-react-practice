import { render, screen } from "@testing-library/react";
import Restraurentcard from "../Restraurentcard";
import MOCK_DATA from "../__tests__/mocks/rescardMock.json";
import "@testing-library/jest-dom";

describe("Restraurentcard component", () => {
  it("Should render Restaurant componnet with props data", () => {
    render(<Restraurentcard resList={MOCK_DATA} />);
    const name = screen.getByText("Burger King");
    expect(name).toBeInTheDocument();
  });
});
