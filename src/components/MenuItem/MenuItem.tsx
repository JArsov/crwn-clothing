import React from "react";
import { ifProp } from "styled-tools";
import styled from "styled-components";

const MenuItemBackgroundImageContainer = styled.div<{ imageUrl: string }>`
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const MenuItemContentContainer = styled.div`
  height: 90px;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

const MenuItemTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 0.4rem;
  font-size: 1.4rem;
  color: #4a4a4a;
`;

const MenuItemSubtitle = styled.span`
  font-weight: lighter;
  font-size: 1rem;
`;

const MenuItemContainer = styled.div<{ size?: string }>`
  min-width: 30%;
  height: ${ifProp("size", "20rem", "13rem")};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 0.5rem 1rem;
  overflow: hidden;

  &:first-child {
    margin-right: 0.5rem;
  }

  &:last-child {
    margin-left: 0.5rem;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover ${MenuItemBackgroundImageContainer} {
    transform: scale(1.1);
    transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  &:hover ${MenuItemContentContainer} {
    opacity: 0.9;
  }
`;

export interface MenuItemModel {
  id: number;
  title: string;
  imageUrl: string;
  linkUrl?: string;
  size?: string;
}

export interface MenuItemProps {
  menuItem: MenuItemModel;
}

const MenuItem: React.FC<MenuItemModel> = ({ id, title, imageUrl, size }) => {
  return (
    <MenuItemContainer size={size}>
      <MenuItemBackgroundImageContainer imageUrl={imageUrl} />
      <MenuItemContentContainer>
        <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
        <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
      </MenuItemContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
