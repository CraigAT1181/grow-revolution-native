import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView, View } from "react-native";
import MonthBar from "../components/menu-bars/month-bar";
import TopMenuBar from "../components/menu-bars/top-menu-bar";
import MonthlyData from "./monthly-data";
import GrowSearch from "./grow-search";

const Grow = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <View style={{ flex: 1 }}>
      {/* <TopMenuBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} /> */}

      {selectedTab === 1 && (
        <View style={{ flex: 1 }}>
          {/* <View style={{ flexShrink: 1 }}>
            <MonthBar />
          </View> */}
          <View style={{ flex: 1 }}>
            <MonthlyData />
          </View>
        </View>
      )}

      {selectedTab === 2 && <GrowSearch />}
    </View>
  );
};

export default Grow;
