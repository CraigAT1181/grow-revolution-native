import React, { useMemo } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { colours, globalStyles } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";
import { useGrow } from "../../contexts/GrowContext";

const MonthBar = () => {
  const { months, selectedMonth, setSelectedMonth } = useGrow();

  const monthIntro = useMemo(() => {
    return months.find((month) => month.month_id === selectedMonth)
      .introduction;
  }, [selectedMonth, months]);

  return (
    <View>
      <FlatList
        data={months}
        horizontal
        contentContainerStyle={{
          backgroundColor: colours.background,
          padding: 4,
        }}
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
        <Text style={globalStyles.textCentered}>{monthIntro}</Text>
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
    width: 110,
    elevation: 4,
    borderColor: colours.secondary,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: colours.primary,
  },
  content: {
    marginTop: 20,
    marginHorizontal: 10,
    padding: 20,
    alignItems: "center",
    backgroundColor: colours.white,
    borderRadius: 10,
    elevation: 4,
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
