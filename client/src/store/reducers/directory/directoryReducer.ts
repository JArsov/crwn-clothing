import {
  DirectoryActionTypes,
  DirectoryActionWithPayload
} from "../../actions/directoryActions";
import reducerWithActionMap, { ActionMap } from "../../storeHelper";

import { DirectoryState } from "../types/DirectoryState";
import { Reducer } from "redux";

const initialState: DirectoryState = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

type DirectoryReducer = Reducer<DirectoryState, DirectoryActionWithPayload>;

const fetchAllSections: DirectoryReducer = state => {
  const directoryState = state as DirectoryState;
  return directoryState;
};

const actionMap: ActionMap<DirectoryState, DirectoryActionWithPayload> = {
  [DirectoryActionTypes.FETCH_ALL_SECTIONS]: fetchAllSections
};

export default reducerWithActionMap(actionMap, initialState);
