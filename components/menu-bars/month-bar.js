import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { theme } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";
import { useGrow } from "../../contexts/GrowContext";

const MonthBar = () => {
  const { months, selectedMonth, setSelectedMonth } = useGrow();

  return (
    <View style={styles.container}>
      <FlatList
        data={months}
        horizontal
        contentContainerStyle={styles.menuData}
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
    </View>
  );
};

export default MonthBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
  },
  menuData: {
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  tab: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 110,
  },
  activeTab: {
    backgroundColor: theme.colors.primary,
  },
  tabText: {
    fontSize: 16,
    color: theme.colors.textOnBackground,
    textAlign: "center",
  },
  activeTabText: {
    color: theme.colors.textOnPrimary,
    fontFamily: "nunito-bold",
  },
});
