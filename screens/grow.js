import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";
import { useGrow } from "../contexts/GrowContext";
import MonthBar from "../components/menu-bars/month-bar";
import TopMenuBar from "../components/menu-bars/top-menu-bar";

const Grow = () => {
  const topMenu = [
    { id: 1, title: "Calendar" },
    { id: 2, title: "Encyclopaedia" },
  ];
  const { months } = useGrow();
  return (
    <View style={globalStyles.container}>
      <TopMenuBar tabContent={topMenu} />
      <MonthBar tabContent={months} />
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
