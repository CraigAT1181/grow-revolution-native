import React, { useMemo, useState } from "react";
import { View, StyleSheet } from "react-native";
import MonthBar from "../components/menu-bars/month-bar";
import TopMenuBar from "../components/menu-bars/top-menu-bar";
import MonthlyData from "./monthly-data";
import { FlatList } from "react-native-gesture-handler";
import EncyclopediaGrid from "../components/grids/encyclopedia-grid";
import GrowSearch from "./grow-search";

const Grow = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const calendarSections = useMemo(() => [
    { id: "monthBar", component: <MonthBar /> },
    { id: "monthlyData", component: <MonthlyData /> },
  ]);

  return (
    <View>
      <TopMenuBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === 1 && (
        <FlatList
          data={calendarSections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => item.component}
        />
      )}
      {selectedTab === 2 && <GrowSearch />}
    </View>
  );
};

export default Grow;

const styles = StyleSheet.create({
  monthTabBar: {
    flex: 1,
    flexDirection: "row",
  },
});
