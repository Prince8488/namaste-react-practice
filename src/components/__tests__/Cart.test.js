import { render, act, screen, fireEvent } from "@testing-library/react";
import Restaurantdetail from "../Restaurantdetail";
import API_DATA from "./mocks/resListMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(API_DATA);
    },
  });
});

it("Should load res Menu componnet", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <Restaurantdetail />
        </BrowserRouter>
      </Provider>
    )
  );
  const addBtn = screen.getAllByTestId("add");
  fireEvent.click(addBtn[0]);
  const card = screen.getByText(1);
  expect(card).toBeInTheDocument();
});
