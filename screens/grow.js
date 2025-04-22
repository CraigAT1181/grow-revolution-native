import React from "react";
import { View, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";
import MonthlyData from "./monthly-data";
import GrowSearchIcon from "../components/menu-bars/grow-search-icon";
import MonthBar from "../components/menu-bars/month-bar";

const Grow = () => {
  return (
    <ScrollView
      style={globalStyles.viewContainer}
      contentContainerStyle={globalStyles.scrollContainer}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <MonthBar />
    </ScrollView>
  );
};

export default Grow;
