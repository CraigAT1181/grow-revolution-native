import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { colours } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const TopMenuBar = ({ selectedTab, setSelectedTab }) => {
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

  return (
    <View>
      <FlatList
        data={topMenu}
        horizontal
        contentContainerStyle={styles.menuData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.tab, selectedTab === item.id && styles.activeTab]}
            onPress={() => setSelectedTab(item.id)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === item.id && styles.activeTabText,
              ]}
            >
              {item.icon}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopMenuBar;

const styles = StyleSheet.create({
  menuData: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: colours.background,
    marginBottom: 20,
    padding: 10,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 70,
    backgroundColor: colours.white,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colours.secondary,
  },
  activeTab: {
    backgroundColor: colours.primary,
  },
  content: {
    marginTop: 20,
    padding: 20,
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    color: colours.primary,
  },
  activeTabText: {
    color: colours.white,
    fontWeight: "bold",
  },
});
