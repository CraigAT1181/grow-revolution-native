import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";
import { useGrow } from "../../contexts/GrowContext";

const MonthBar = ({ tabContent }) => {
  const { selectedMonth, setSelectedMonth } = useGrow();

  return (
    <View style={styles.container}>
      <FlatList
        data={tabContent}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.month_id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.tab,
              selectedMonth === item.month_id && styles.activeTab,
            ]}
            onPress={() => setSelectedMonth(item.month_id)}
          >
            <Text
              style={[
                styles.tabText,
                selectedMonth === item.month_id && styles.activeTabText,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.content}>
        <Text style={globalStyles.text}>
          {tabContent.find((m) => m.month_id === selectedMonth).introduction}
        </Text>
      </View>
    </View>
  );
};

export default MonthBar;

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
