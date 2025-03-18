import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView, View } from "react-native";
import MonthBar from "../components/menu-bars/month-bar";
import TopMenuBar from "../components/menu-bars/top-menu-bar";
import MonthlyData from "./monthly-data";
import GrowSearch from "./grow-search";

const Grow = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: "relative" }}>
        <TopMenuBar />
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <MonthlyData />
        </View>
      </View>
    </View>
  );
};

export default Grow;
