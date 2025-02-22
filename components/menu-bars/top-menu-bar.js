import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { colours } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";

const TopMenuBar = ({ tabContent, selectedTab, setSelectedTab }) => {
  return (
    <View>
      <FlatList
        data={tabContent}
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
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    backgroundColor: colours.white,
    marginBottom: 20,
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
