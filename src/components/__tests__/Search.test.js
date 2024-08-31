import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import API_DATA from "./mocks/resApiMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(API_DATA);
    },
  });
});
it("should load body componnet with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchTitle = screen.getByTitle("Search");
  expect(searchTitle).toBeInTheDocument();
});

it("should update input box and click on  search btn", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const beforeCards = screen.getAllByTestId("res-card");
  expect(beforeCards.length).toBe(20);
  const searchbtn = screen.getByTestId("btn");
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchbtn);
  const cards = screen.getAllByTestId("res-card");
  expect(cards.length).toBe(1);
});

it("should filter top restaurent and click on  search btn", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const beforeCards = screen.getAllByTestId("res-card");
  expect(beforeCards.length).toBe(20);
  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(filterBtn);
  const cardafterFilter = screen.getAllByTestId("res-card");
  expect(cardafterFilter.length).toBe(9);
});
