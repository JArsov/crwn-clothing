import { RootState } from "../../store/reducers/types/RootState";

const mockRootState: RootState = {
  cart: {
    cartItems: [
      {
        id: 1,
        imageUrl: "image-url1",
        name: "name1",
        price: 1,
        quantity: 1
      },
      {
        id: 2,
        imageUrl: "image-url2",
        name: "name2",
        price: 2,
        quantity: 2
      },
      {
        id: 3,
        imageUrl: "image-url3",
        name: "name3",
        price: 3,
        quantity: 3
      }
    ],
    hidden: true
  },
  user: {
    currentUser: {
      createdAt: new Date(),
      displayName: "Display Name",
      email: "email@email.com"
    }
  }
};

export default mockRootState;
