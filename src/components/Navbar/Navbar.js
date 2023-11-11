import React, { useState, useRef, useEffect } from "react";
import {
  NavbarContainer,
  OptionsContainer,
  DisplayButton,
  OptionItem,
} from "./styles";
import { VscSettings } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = ({ handleApplyClick }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [groupingOption, setGroupingOption] = useState(
    localStorage.getItem("groupingOption") || "status"
  );
  const [orderingOption, setOrderingOption] = useState("priority");
  const optionsContainerRef = useRef(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    const savedGroupingOption = localStorage.getItem("groupingOption");
    if (savedGroupingOption) {
      setGroupingOption(savedGroupingOption);
    }
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        optionsContainerRef.current &&
        !optionsContainerRef.current.contains(event.target)
      ) {
        setShowOptions(false);
      }
    }
    if (showOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOptions]);

  return (
    <NavbarContainer>
      <DisplayButton onClick={toggleOptions}>
        <VscSettings />
        <span>Display</span>
        <RiArrowDropDownLine size={25} />
      </DisplayButton>
      {showOptions && (
        <OptionsContainer ref={optionsContainerRef}>
          <OptionItem>
            <label htmlFor="grouping" className="label">
              Grouping:
            </label>
            <select
              id="grouping"
              value={groupingOption}
              onChange={(e) => {
                setGroupingOption(e.target.value);
                handleApplyClick(e.target.value, orderingOption); // Apply immediately
              }}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </OptionItem>
          <OptionItem>
            <label htmlFor="ordering" className="label">
              Ordering:
            </label>
            <select
              id="ordering"
              value={orderingOption}
              onChange={(e) => {
                setOrderingOption(e.target.value);
                handleApplyClick(groupingOption, e.target.value); // Apply immediately
              }}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </OptionItem>
        </OptionsContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
