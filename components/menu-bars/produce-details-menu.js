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
          color={
            selectedTab === 1
              ? theme.colors.textOnPrimary
              : theme.colors.secondary
          }
        />
      ),
      label: "Planting",
    },
    {
      id: 2,
      tabIcon: (
        <FontAwesome5
          name={"cut"}
          size={25}
          color={
            selectedTab === 2
              ? theme.colors.textOnPrimary
              : theme.colors.secondary
          }
        />
      ),
      label: "Harvesting",
    },
    {
      id: 3,
      tabIcon: (
        <FontAwesome5
          name={"handshake"}
          size={25}
          color={
            selectedTab === 3
              ? theme.colors.textOnPrimary
              : theme.colors.secondary
          }
        />
      ),
      label: "Companions",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.menuData}>
        {menuIcons.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.tab,
              selectedTab === item.id
                ? item.id === 1
                  ? styles.activeTabOne
                  : item.id === 2
                  ? styles.activeTabTwo
                  : item.id === 3
                  ? styles.activeTabThree
                  : null
                : null,
            ]}
            onPress={() => setSelectedTab(item.id)}
          >
            <View style={styles.iconContainer}>{item.tabIcon}</View>
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
    marginVertical: 5,
  },
  activeTabOne: {
    backgroundColor: theme.colors.secondary,
    elevation: 6,
    borderTopStartRadius: 10,
  },
  activeTabTwo: {
    backgroundColor: theme.colors.secondary,
    elevation: 6,
  },
  activeTabThree: {
    backgroundColor: theme.colors.secondary,
    elevation: 6,
    borderTopEndRadius: 10,
  },
  tabText: {
    fontSize: 14,
    color: theme.colors.secondary,
    marginTop: 5,
    fontFamily: "nunito-normal",
  },
  activeTabText: {
    color: theme.colors.background,
    fontFamily: "nunito-bold",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
