import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import MonthBar from "../components/menu-bars/month-bar";
import TopMenuBar from "../components/menu-bars/top-menu-bar";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MonthlyJobs from "./monthly-jobs";
import { ScrollView } from "react-native-gesture-handler";

const Grow = () => {
  const topMenu = [
    {
      id: 1,
      icon: <FontAwesome5 name={"calendar"} size={25} />,
    },
    {
      id: 2,
      icon: <FontAwesome5 name={"search"} size={25} />,
    },
  ];

  const [selectedTab, setSelectedTab] = useState(topMenu[0].id);

  return (
    <ScrollView
      contentContainerStyle={globalStyles.screen}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <TopMenuBar
        tabContent={topMenu}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === topMenu[0].id && (
        <View>
          <MonthBar />
          <MonthlyJobs />
        </View>
      )}
    </ScrollView>
  );
};

export default Grow;

const styles = StyleSheet.create({
  monthTabBar: {
    flex: 1,
    flexDirection: "row",
  },
});
