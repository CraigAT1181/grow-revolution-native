import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../../styles/global";

const ProduceDetailsMenu = ({ selectedTab, setSelectedTab }) => {
  const menuIcons = [
    {
      id: 1,
      tabIcon: (
        <FontAwesome5
          name={"seedling"}
          size={25}
          color={theme.colors.secondary}
        />
      ),
      label: "Planting",
    },
    {
      id: 2,
      tabIcon: (
        <FontAwesome5 name={"cut"} size={25} color={theme.colors.secondary} />
      ),
      label: "Harvesting",
    },
    {
      id: 3,
      tabIcon: (
        <FontAwesome5
          name={"handshake"}
          size={25}
          color={theme.colors.secondary}
        />
      ),
      label: "Companions",
    },
    {
      id: 4,
      tabIcon: (
        <FontAwesome5
          name={"hand-holding-medical"}
          size={25}
          color={theme.colors.secondary}
        />
      ),
      label: "Care",
    },
    {
      id: 5,
      tabIcon: (
        <FontAwesome5
          name={"mortar-pestle"}
          size={25}
          color={theme.colors.secondary}
        />
      ),
      label: "Uses",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.menuData}>
        {menuIcons.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.tab, selectedTab === item.id && styles.activeTab]}
            onPress={() => setSelectedTab(item.id)}
          >
            <View>{item.tabIcon}</View>
            <Text
              style={[
                styles.tabText,
                selectedTab === item.id && styles.activeTabText,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ProduceDetailsMenu;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
  },
  menuData: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    marginTop: 5,
    marginBottom: 15,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.secondary,
  },
  tabText: {
    fontSize: 11,
    color: theme.colors.secondary,
    marginTop: 5,
    fontFamily: "nunito-normal",
  },
  activeTabText: {
    fontFamily: "nunito-bold",
  },
});
