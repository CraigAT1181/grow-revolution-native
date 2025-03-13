import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { View } from "react-native";
import MonthBar from "../components/menu-bars/month-bar";
import TopMenuBar from "../components/menu-bars/top-menu-bar";
import MonthlyData from "./monthly-data";
import GrowSearch from "./grow-search";

const Grow = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <SafeAreaView>
      <TopMenuBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {selectedTab === 1 && (
        <View>
          <MonthBar />

          <MonthlyData />
        </View>
      )}

      {selectedTab === 2 && <GrowSearch />}
    </SafeAreaView>
  );
};

export default Grow;
