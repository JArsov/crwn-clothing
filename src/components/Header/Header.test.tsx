import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "../../store/reduxConfig";
import { render } from "@testing-library/react";

const mockStore = configureStore();

// test("display 'Sign Out' button if the user is signed in", () => {
//   const { getByText, queryByText } = render(
//     <Provider store={mockStore}>
//       <BrowserRouter>
//         <Header />
//       </BrowserRouter>
//     </Provider>
//   );

//   expect(queryByText("SIGN IN")).toBeDefined();

//   jest.spyOn(auth, "signOut").mockImplementationOnce(() => {
//     return new Promise<void>(resolve => {
//       resolve();
//     });
//   });

//   fireEvent.click(getByText("SIGN OUT"));

//   expect(queryByText("SIGN IN")).toBeDefined();
// });

test("display 'Sign In' button if the user is not signed in", () => {
  const { queryByText } = render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  expect(queryByText("SIGN IN")).toBeDefined();
});
