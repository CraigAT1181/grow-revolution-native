import React from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/global";
import MonthlyData from "./monthly-data";
import GrowSearchIcon from "../components/menu-bars/grow-search-icon";

const Grow = () => {
  return (
    <View style={globalStyles.viewContainer}>
      <MonthlyData />
    </View>
  );
};

export default Grow;
