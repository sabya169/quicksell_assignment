import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  padding: 2.5rem;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
`;

export const DisplayButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: inherit;
  font-size: medium;
  font-weight: 500;
`;

export const OptionsContainer = styled.div`
  background-color: #f9f9fa;
  position: absolute;
  width: 30rem;
  top: 6.5rem;
  left: 2.6rem;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem;
  border-radius: 1rem;
  gap: 1rem;
  z-index: 1000;
`;

export const OptionItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  > * {
    font-size: medium;
    font-family: inherit;
    font-weight: 500;
  }
  & .label {
    color: #bebec1;
  }
`;
