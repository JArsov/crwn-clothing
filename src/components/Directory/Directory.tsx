import MenuItem, { MenuItemModel } from "../MenuItem/MenuItem";
import { shallowEqual, useSelector } from "react-redux";

import React from "react";
import { RootState } from "../../store/reducers/types/RootState";
import { selectSections } from "../../store/selectors/directory/directorySelector";
import styled from "styled-components";

const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Directory: React.FC<{}> = () => {
  const allSections = useSelector<RootState, MenuItemModel[]>(
    selectSections,
    shallowEqual
  );
  return (
    <DirectoryContainer>
      {allSections.map(({ id, ...rest }) => (
        <MenuItem key={id} id={id} {...rest} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
