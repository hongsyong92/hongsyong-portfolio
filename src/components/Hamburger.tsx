import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Hamburger = ({ open, setOpen }: Props) => {
  const handleOnChange = () => {
    setOpen(!open);
  };
  return (
    <Burger id="menuToggle">
      <input
        type="checkbox"
        onChange={handleOnChange}
        checked={open ? true : false}
      />
      <span></span>
      <span></span>
      <span></span>
    </Burger>
  );
};

export default Hamburger;

const Burger = styled.div`
  position: relative;
  display: none;
  -webkit-user-select: none;
  user-select: none;
  z-index: 1;
  @media all and (max-width: 1600px) {
    display: block;
  }
  > span {
    display: block;
    width: 18px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: #607b96;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    z-index: 1;
    &:first-child {
      transform-origin: 0% 0%;
    }
    &:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  > input {
    display: block;
    width: 18px;
    height: 16px;
    position: absolute;
    margin: 0;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
    &:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(-5px, -9px);
      background: #607b96;
    }
    &:checked ~ span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
    &:checked ~ span:nth-last-child(2) {
      transform: rotate(-45deg) translate(-2px, 7px);
    }
  }
`;
