import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { theme } from "../../styles/global";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const TopMenuBar = ({ selectedTab, setSelectedTab }) => {
  const tabIcons = [
    {
      id: 1,
      tabIcon: (
        <FontAwesome5
          name={"calendar"}
          size={25}
          color={
            selectedTab === 1
              ? theme.colors.textOnPrimary
              : theme.colors.primary
          }
        />
      ),
    },
    {
      id: 2,
      tabIcon: (
        <FontAwesome5
          name={"search"}
          size={25}
          color={
            selectedTab === 2
              ? theme.colors.textOnPrimary
              : theme.colors.primary
          }
        />
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.menuData}>
        {tabIcons.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.tab, selectedTab === item.id && styles.activeTab]}
            onPress={() => setSelectedTab(item.id)}
          >
            <View style={styles.iconContainer}>{item.tabIcon}</View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TopMenuBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  menuData: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    backgroundColor: theme.colors.background,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    backgroundColor: theme.colors.background,
  },
  activeTab: {
    backgroundColor: theme.colors.primary,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
