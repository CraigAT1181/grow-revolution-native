import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";
import { useGrow } from "../contexts/GrowContext";
import MonthBar from "../components/menu-bars/month-bar";
import TopMenuBar from "../components/menu-bars/top-menu-bar";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

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
  const { months } = useGrow();
  return (
    <View style={globalStyles.container}>
      <TopMenuBar
        tabContent={topMenu}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === topMenu[0].id && <MonthBar tabContent={months} />}
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
