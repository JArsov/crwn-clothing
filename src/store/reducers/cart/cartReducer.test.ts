import { CartState } from "../types/CartState";
import cartReducer from "./cartReducer";
import cloneDeep from "lodash/cloneDeep";
import { toggleCartHidden } from "../../actions/cartActions";

export const mockState: CartState = {
  hidden: true
};

describe("CartReducer", () => {
  it("should set the current user", () => {
    const newState = cartReducer(mockState, toggleCartHidden());

    expect(newState.hidden).toBe(!mockState.hidden);
  });
});
