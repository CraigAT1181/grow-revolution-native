import React, { useMemo, useEffect } from "react";
import { useGrow } from "../contexts/GrowContext";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../styles/global";
import SowGrid from "../components/grids/sow-grid";
import JobGrid from "../components/grids/job-grid";
import { FlatList } from "react-native-gesture-handler";

const MonthlyData = () => {
  const {
    months,
    cropsToSow,
    jobsToDo,
    handleFetchMonthlyData,
    selectedMonth,
  } = useGrow();

  const sections = [
    { id: 1, component: <SowGrid array={cropsToSow} /> },
    { id: 2, component: <JobGrid array={jobsToDo} /> },
  ];

  const monthIntro = useMemo(() => {
    return months.find((month) => month.month_id === selectedMonth)
      .introduction;
  }, [selectedMonth, months]);

  useEffect(() => {
    const fetchMonthData = async () => {
      try {
        await handleFetchMonthlyData(selectedMonth);
      } catch (error) {
        console.error("Error fetching monthly job info:", error);
        setError(error);
      }
    };

    fetchMonthData();
  }, [selectedMonth]);

  return (
    <View style={styles.container}>
      <FlatList
        data={sections}
        ListHeaderComponent={
          <View style={styles.introContainer}>
            <Text style={theme.typography.body}>{monthIntro}</Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => item.component}
        ListFooterComponent={<View style={{ height: 280 }} />}
      />
    </View>
  );
};

export default MonthlyData;

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
  },
});
