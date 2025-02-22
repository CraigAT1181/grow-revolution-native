import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { colours, globalStyles } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";
import { useGrow } from "../../contexts/GrowContext";

const MonthBar = () => {
  const { months, selectedMonth, setSelectedMonth } = useGrow();

  return (
    <View>
      <FlatList
        data={months}
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
          {months.find((m) => m.month_id === selectedMonth).introduction}
        </Text>
      </View>
    </View>
  );
};

export default MonthBar;

const styles = StyleSheet.create({
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 2,
    backgroundColor: colours.white,
    borderWidth: 2,
    borderColor: colours.secondary,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
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
    color: colours.black,
  },
  activeTabText: {
    color: colours.white,
    fontWeight: "bold",
  },
});
