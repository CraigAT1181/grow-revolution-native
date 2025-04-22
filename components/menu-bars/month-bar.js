import React, { useMemo, useRef, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import { theme } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";
import { useGrow } from "../../contexts/GrowContext";

/* === Constants for consistent sizing and spacing === */
const SCREEN_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = 144;
const ITEM_SPACING = 4;
const PADDING_HORIZONTAL = 20;

const MonthBar = () => {
  const { months, selectedMonth, setSelectedMonth } = useGrow();
  const flatListRef = useRef(null);

  const monthIntro = useMemo(() => {
    return (
      months.find((month) => month.month_id === selectedMonth)?.introduction ??
      ""
    );
  }, [selectedMonth, months]);

  useEffect(() => {
    if (!months || months.length === 0) return;

    const index = months.findIndex((month) => month.month_id === selectedMonth);
    if (index === -1 || !flatListRef.current) return;

    const offset =
      (ITEM_WIDTH + ITEM_SPACING) * index -
      (SCREEN_WIDTH - ITEM_WIDTH - 2 * PADDING_HORIZONTAL) / 2;

    flatListRef.current.scrollToOffset({
      offset: Math.max(0, offset),
      animated: true,
    });
  }, [selectedMonth, months]);

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={months}
        keyExtractor={(item) => item.month_id}
        horizontal
        showsHorizontalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH + ITEM_SPACING,
          offset: (ITEM_WIDTH + ITEM_SPACING) * index,
          index,
        })}
        renderItem={({ item }) => {
          const isSelected = selectedMonth === item.month_id;
          return (
            <TouchableOpacity
              style={isSelected ? styles.activeTab : styles.tab}
              onPress={() => setSelectedMonth(item.month_id)}
            >
              <Text style={isSelected ? styles.activeTabText : styles.tabText}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      <View style={styles.introContainer}>
        <Text style={styles.introText}>{monthIntro}</Text>
      </View>
    </View>
  );
};

export default MonthBar;

const styles = StyleSheet.create({
  tab: {
    width: ITEM_WIDTH,
    marginHorizontal: ITEM_SPACING / 2,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
  },
  activeTab: {
    width: ITEM_WIDTH,
    marginHorizontal: ITEM_SPACING / 2,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
  tabText: {
    fontSize: 24,
    fontFamily: "light",
    color: theme.colors.textOnBackground,
  },
  activeTabText: {
    fontSize: 24,
    fontFamily: "semibold",
    color: theme.colors.textOnPrimary,
  },
  introContainer: {
    marginTop: 8,
    paddingHorizontal: 10,
  },
  introText: {
    fontSize: 18,
    fontFamily: "light",
    lineHeight: 28,
    textAlign: "center",
  },
});
