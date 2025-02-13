import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";

const TopMenuBar = ({ tabContent }) => {
  const [selectedTab, setSelectedTab] = useState(tabContent[0].id);

  return (
    <View style={styles.container}>
      <FlatList
        data={tabContent}
        horizontal
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
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopMenuBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 2,
    backgroundColor: "#ccc",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  activeTab: {
    backgroundColor: "#260F07",
  },
  content: {
    marginTop: 20,
    padding: 20,
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    color: "#260F07",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
