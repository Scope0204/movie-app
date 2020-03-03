import React from "react";
import propTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { ACTIVE_COLOR, INACTIVE_COLOR } from "../constants/Colors";

//focused = true / false  --> 그에 따라 색상 변경
const TabBarIcon = ({ name, focused }) => (
  // expo의 icon 참조
  <Ionicons
    size={26}
    name={name}
    color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
  />
);

TabBarIcon.propTypes = {
  name: propTypes.string.isRequired,
  focused: propTypes.bool.isRequired
};

export default TabBarIcon;
